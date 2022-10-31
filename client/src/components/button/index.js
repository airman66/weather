import "./Button.css";

const Button = ({text, active=false, onClick=null, type="button"}) => {
    if (type==="button") {
        return <button className="button">{text}</button>;
    } else if (type === "featured") {
        return <button onClick={onClick} className={active ? "button button-featured button-featured-active" : "button button-featured"}>{text}</button>;
    } else if (type === "filter") {
        return <button onClick={onClick} className={active ? "button button-filter button-filter--active" : "button button-filter"}>{text}</button>;
    }
};

export default Button;