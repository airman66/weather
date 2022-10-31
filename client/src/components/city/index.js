import "./City.css";
import Header from "../header";
import React from "react";
import Search from "../search";
import star from "../../img/featured_star.png";
import wind from "../../img/wind.png";
import sun from "../../img/sun.png";

const City = ({city, onCityChoose}) => {
    return (
        <div className="city">
            <Search onCityChoose={onCityChoose} />
            <Header />
            <h1 className={"page-title"}>{city.name} <img src={star} alt="звезда"/></h1>
            <div className="city-temperature">10°С</div>
            <div className="city-wind"><img src={wind} alt="ветер"/> 2 м/с</div>
            <div className="city-24h">
                <table className="city-24h-grid">
                    <tr>
                        <td>Сейчас</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                        <td>00</td>
                        <td>01</td>
                        <td>02</td>
                        <td>03</td>
                        <td>04</td>
                        <td>05</td>
                        <td>06</td>
                        <td>07</td>
                        <td>08</td>
                        <td>09</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td><img src={sun} alt="солнце"/></td>
                    </tr>
                    <tr>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                        <td>10°С</td>
                    </tr>
                </table>
            </div>
            <div className="city-10d">
                <table className="city-10d-grid">
                    <tr>
                        <td>Сегодня</td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td>Ночь 5°С</td>
                        <td>День 12°С</td>
                    </tr>
                    <tr>
                        <td>Пн</td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td>Ночь 5°С</td>
                        <td>День 12°С</td>
                    </tr>
                    <tr>
                        <td>Вт</td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td>Ночь 5°С</td>
                        <td>День 12°С</td>
                    </tr>
                    <tr>
                        <td>Ср</td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td>Ночь 5°С</td>
                        <td>День 12°С</td>
                    </tr>
                    <tr>
                        <td>Чт</td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td>Ночь 5°С</td>
                        <td>День 12°С</td>
                    </tr>
                    <tr>
                        <td>Пт</td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td>Ночь 5°С</td>
                        <td>День 12°С</td>
                    </tr>
                    <tr>
                        <td>Сб</td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td>Ночь 5°С</td>
                        <td>День 12°С</td>
                    </tr>
                    <tr>
                        <td>Вс</td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td>Ночь 5°С</td>
                        <td>День 12°С</td>
                    </tr>
                    <tr>
                        <td>Пн</td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td>Ночь 5°С</td>
                        <td>День 12°С</td>
                    </tr>
                    <tr>
                        <td>Вт</td>
                        <td><img src={sun} alt="солнце"/></td>
                        <td>Ночь 5°С</td>
                        <td>День 12°С</td>
                    </tr>
                </table>
            </div>
            <div className="city-additional-info">
                <div className="city-additional-info-item">
                    Влажность<br />
                    <span>76%</span>
                </div>
                <div className="city-additional-info-item">
                    Давление<br />
                    <span>765</span><br/>
                    мм рт.ст.
                </div>
                <div className="city-additional-info-item">
                    Осадки<br />
                    <span>2</span>мм
                </div>
            </div>
        </div>
    );
};

export default City;