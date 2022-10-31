import {Link} from "react-router-dom";
import featured from "../../img/featured.png";
import settings from "../../img/settings.png";
import filters from "../../img/filters.png";
import React from "react";
import "./Header.css";
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <header className={"header"}>
            <ul className={"header-list"}>
                <li className={location.pathname === "/featured" ? "header-list-item header-list-item--active" : "header-list-item"}>
                    <Link to={location.pathname === "/featured" ? "/city" : "/featured"}><img src={featured} alt="избранное"/></Link>
                </li>
                <li className={location.pathname === "/settings" ? "header-list-item header-list-item--active" : "header-list-item"}>
                    <Link to={location.pathname === "/settings" ? "/city" : "/settings"}><img src={settings} alt="настройки"/></Link>
                </li>
                <li className={location.pathname === "/filters" ? "header-list-item header-list-item--active" : "header-list-item"}>
                    <Link to={location.pathname === "/filters" ? "/city" : "/filters"}><img src={filters} alt="параметры"/></Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;