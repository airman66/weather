import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./components/home";
import Settings from "./components/settings";
import Featured from "./components/featured";
import Filters from "./components/filters";
import {useState} from "react";
import City from "./components/city";

const App = () => {
    const [city, setCity] = useState({_id: 1, name: "Рязань"});

    const onCityChoose =  cityData => {
        setCity(cityData);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home onCityChoose={onCityChoose} />} />
                    <Route path="/settings" element={<Settings onCityChoose={onCityChoose} />} />
                    <Route path="/featured" element={<Featured onCityChoose={onCityChoose} />} />
                    <Route path="/filters" element={<Filters />} />
                    <Route path="/city" element={<City onCityChoose={onCityChoose} city={city} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
