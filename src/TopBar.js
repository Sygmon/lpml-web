import { MenuButton } from "./Top-menu.js";
import './App.scss';
import './scss/Topbar.scss';

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
        <a href="/" className="menu-button">
            Lpml Icon Here
        </a>
    </nav>
  );
}


export default TopBar;
