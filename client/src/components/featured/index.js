import Button from "../button";
import React, {useState} from "react";
import "./Featured.css"
import Header from "../header";
import Search from "../search";

const Featured = ({onCityChoose}) => {
    const initialFeatured = [
        {id: 0, name: "Рязань", country: "Россия", height: "158 м", climate: "умеренно-континентальный", normalPressure: "749 мм рт.ст.", show: false},
        {id: 1, name: "Тула", country: "Россия", height: "158 м", climate: "умеренно-континентальный", normalPressure: "749 мм рт.ст.", show: false},
        {id: 2, name: "Москва", country: "Россия", height: "158 м", climate: "умеренно-континентальный", normalPressure: "749 мм рт.ст.", show: false},
        {id: 3, name: "Санкт-Петербург", country: "Россия", height: "158 м", climate: "умеренно-континентальный", normalPressure: "749 мм рт.ст.", show: false},
        {id: 4, name: "Саратов", country: "Россия", height: "158 м", climate: "умеренно-континентальный", normalPressure: "749 мм рт.ст.", show: false},
        {id: 5, name: "Нижний Новгород", country: "Россия", height: "158 м", climate: "умеренно-континентальный", normalPressure: "749 мм рт.ст.", show: false},
        {id: 6, name: "Казань", country: "Россия", height: "158 м", climate: "умеренно-континентальный", normalPressure: "749 мм рт.ст.", show: false},
        {id: 7, name: "Уфа", country: "Россия", height: "158 м", climate: "умеренно-континентальный", normalPressure: "749 мм рт.ст.", show: false}
    ];

    const [featured, setFeatured] = useState(initialFeatured);

    const click = (id) => {
        const newFeatured = JSON.parse(JSON.stringify(featured));
        newFeatured[id].show = !newFeatured[id].show;
        const needValue = newFeatured[id].show;
        newFeatured.forEach(item => {
            item.show = false;
            return item;
        });
        newFeatured[id].show = needValue;
        setFeatured(newFeatured);
    };

    return (
        <div className={"featured"}>
            <Search onCityChoose={{onCityChoose}} />
            <Header />
            <h1 className={"page-title page-title-sm"}>Избранное</h1>
            <div className="featured-block">
                {featured.map(featuredItem => (
                    <div style={{position:"relative"}} key={featuredItem.id}>
                        <Button active={featuredItem.show} text={featuredItem.name} type={"featured"} onClick={() => click(featuredItem.id)} />
                        <div className={featuredItem.show ? "featured-item featured-item--show" : "featured-item"}>
                            <div className="featured-item-column">
                                <img src="https://via.placeholder.com/140x96" alt={featuredItem.name} />
                                <div className="featured-item_city">{featuredItem.name}</div>
                                <div className="featured-item_country">{featuredItem.country}</div>
                            </div>
                            <div className="featured-item-column">
                                <div className="featured-item_height">
                                    Высота над уровнем моря:<br />
                                    <span>{featuredItem.height}</span>
                                </div>
                                <div className="featured-item_climate">
                                    Тип климата:<br />
                                    <span>{featuredItem.climate}</span>
                                </div>
                                <div className="featured-item_pressure">
                                    Нормальное давление:<br />
                                    <span>{featuredItem.normalPressure}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Button text={"Добавить в Избранное"} />
        </div>
    );
};

export default Featured;