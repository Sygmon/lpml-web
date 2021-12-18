import { MenuButton } from "./Top-menu.js";
import { Link } from "react-router-dom";
import '../scss/App.scss';
import '../scss/Sidebar.scss';

function TopBar(props) {
  return (
    <nav className="top-bar">
        <MenuButton/>
        <button 
            className="menu-button"
            onClick={props.themeSwitcher}
            >
                {props.text}
        </button>
        <Link to="/" className="menu-button">
            Lpml Icon Here
        </Link>
    </nav>
  );
}


export default TopBar;
