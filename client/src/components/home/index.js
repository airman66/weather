import React from "react";
import logo from "../../img/logo.png";
import {Link} from "react-router-dom";
import settings from "../../img/settings.png";
import featured from "../../img/featured.png";
import "./Home.css";
import Search from "../search";

const Home = ({onCityChoose}) => {
    return (
        <React.Fragment>
            <img className="logo" src={logo} alt="Логотип"/>
            <Search onCityChoose={onCityChoose} />
            <div className="links">
                <Link to="/settings">
                    <div className="link">
                        <img src={settings} alt="настройки"/>
                        <span>Настройки</span>
                    </div>
                </Link>
                <Link to="/featured">
                    <div className="link">
                        <img src={featured} alt="избранное"/>
                        <span>Избранное</span>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    );
};

;export default Home