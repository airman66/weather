const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const MongoDBURI = "mongodb+srv://admin:$WQKf3D3t$@cluster0.97eykio.mongodb.net/app";
const City = require("./models/City.model");
const cors = require("cors");

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.post("/autocomplete", async (req, res) => {
    try {
        const search = req.body.search;
        const cities = await City.find({name: new RegExp(`^${capitalizeFirstLetter(search)}`)});
        res.json({cities: cities.slice(0, 9)});
    } catch (e) {
        res.json({cities: []});
    }
});

async function start() {
    try {
        await mongoose.connect(MongoDBURI);
        app.listen(port, () => console.log(`App has been started on port ${port}...`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();