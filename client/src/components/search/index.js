import React, {useState} from "react";
import "./Search.css";
import axios from "axios";
import {Link} from "react-router-dom";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Search = ({onCityChoose}) => {
    const [value, setValue] = useState("");

    const [autocomplete, setAutocomplete] = useState([]);

    const change = async (e) => {
        setValue(capitalizeFirstLetter(e.target.value.toLowerCase()));
        await axios.post('/autocomplete', {
            search: e.target.value.toLowerCase()
        }).then(r => setAutocomplete(r.data.cities));
    };


    return (
        <div className="search">
            <input className="search-input" onChange={e => change(e)} value={value} placeholder={"Введите местоположение"} />
            {value.length > 0 &&
                <div className="search-autocomplete">
                    {autocomplete.length === 0 && <div className="search-error">Нет результатов</div>}
                    {autocomplete.map(autocompleteItem => (
                        <Link to={"/city"} key={autocompleteItem._id} ><div
                            onClick={() => {
                                onCityChoose(autocompleteItem);
                                setValue("");
                            }}
                            className="search-autocomplete-item">{autocompleteItem.name}</div></Link>
                    ))}
                </div>
            }
        </div>
    );
};

export default Search;