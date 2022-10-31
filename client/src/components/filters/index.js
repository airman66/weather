import "./Filters.css";
import React, {useEffect, useState} from "react";
import Button from "../button";
import Header from "../header";

const Filters = () => {
    const [filters, setFilters] = useState([]);

    const [all, setAll] = useState(false);

    const click = (id) => {
        const newFilters = JSON.parse(JSON.stringify(filters));
        newFilters[id].checked = !newFilters[id].checked
        if (newFilters.every(filter => filter.checked === true)) {
            setAll(true);
        } else {
            setAll(false);
        }
        localStorage.setItem("filters", JSON.stringify(newFilters));
        setFilters(newFilters);
    };

    const clickAllButton = () => {
        const newFilters = JSON.parse(JSON.stringify(filters));
        if (all === false) {
            newFilters.forEach(filter => {
                filter.checked = true;
                return filter;
            });
            localStorage.setItem("filters", JSON.stringify(newFilters));
            setFilters(newFilters);
            setAll(true);
        } else {
            newFilters.forEach(filter => {
                filter.checked = false;
                return filter;
            });
            localStorage.setItem("filters", JSON.stringify(newFilters));
            setFilters(newFilters);
            setAll(false);
        }
    };

    useEffect(() => {
        const defaultFilters = [
            {id: 0, name: "Погода на 24 часа", checked: false},
            {id: 1, name: "Погода на 10 дней", checked: false},
            {id: 2, name: "Давление", checked: true},
            {id: 3, name: "Влажность", checked: false},
            {id: 4, name: "Осадки", checked: false}
        ];

        if (localStorage.getItem("filters")) {
            setFilters(JSON.parse(localStorage.getItem("filters")));
            if (JSON.parse(localStorage.getItem("filters")).every(filter => filter.checked === true)) {
                setAll(true);
            } else {
                setAll(false);
            }
        } else {
            localStorage.setItem("filters", JSON.stringify(defaultFilters));
            setFilters(defaultFilters);
            setAll(false);
        }
    }, []);

    return (
        <div className="filters">
            <Header />
            <h1 className={"page-title"}>Параметры</h1>
            <p className="page-description">Выберите интересующие Вас параметры</p>
            <div className="filters-block">
                <Button onClick={clickAllButton} active={all} text={"Выбрать все параметры"} type={"filter"} />
                {filters.map(filter => (
                    <Button onClick={() => click(filter.id)} key={filter.id} text={filter.name} active={filter.checked} type={"filter"} />
                ))}
            </div>
        </div>
    );
};

export default Filters;