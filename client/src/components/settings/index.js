import Button from "../button";
import React, {useEffect, useState} from "react";
import "./Settings.css";
import Header from "../header";
import Search from "../search";

const Settings = ({onCityChoose}) => {
    const [settings, setSettings] = useState([]);

    const click = (id, newActive) => {
        const newSettings = JSON.parse(JSON.stringify(settings));
        newSettings[id].active = newActive;
        localStorage.setItem("settings", JSON.stringify(newSettings));
        setSettings(newSettings);
    };

    useEffect(() => {
        const defaultSettings = [
            {id:0, name: "Температура", variations: ["°C", "°F"], active: 0},
            {id:1, name: "Давление", variations: ["мм рт.ст", "Па"], active: 0},
            {id:2, name: "Сила ветра", variations: ["км/ч", "м/с"], active: 1}
        ];

        if (localStorage.getItem("settings")) {
            setSettings(JSON.parse(localStorage.getItem("settings")));
        } else {
            localStorage.setItem("settings", JSON.stringify(defaultSettings));
            setSettings(defaultSettings);
        }
    }, []);

    return (
        <div className={"settings"}>
            <Search onCityChoose={onCityChoose} />
            <Header />
            <h1 className={"page-title"}>Настройки</h1>
            <div className={"settings-block"}>
                {settings.map(setting => (
                    <div key={setting.id} className="settings-block_item">
                        <div className="settings-block_item-title">{setting.name}</div>
                        <div className="settings-block_item-radio">
                            <div onClick={() => click(setting.id, 0)} className={setting.active === 0 ? "settings-block_item-radio_choice settings-block_item-radio_choice--active" : "settings-block_item-radio_choice"}>{setting.variations[0]}</div>
                            <div onClick={() => click(setting.id, 1)} className={setting.active === 1 ? "settings-block_item-radio_choice settings-block_item-radio_choice--active" : "settings-block_item-radio_choice"}>{setting.variations[1]}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{marginTop:100}}>
                <Button text={"? У Вас вопрос или предложение ?"} />
            </div>
        </div>
    );
};

export default Settings;