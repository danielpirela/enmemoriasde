import "./InputSearch.css";
import icon_search from "../../assets/icons/search-icon.svg";

const InputSearch = () => {
    return (
        <div className="container_input_search">
            <input className="input_search" type="search" placeholder="Buscar..." />
            <button className="btn_input_search">
                <img className="search_icon" src={icon_search} alt="icon_search" />
            </button>
        </div>
    )
}

export default InputSearch
