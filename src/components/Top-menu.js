import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import '../scss/App.scss';
import '../scss/Topbar.scss';

function MenuButton() {
    return (
        <>
            <input id="top-toggle" type="checkbox"/>
            <ul className="links">
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/community">
                        Community
                    </Link>
                </li>
                <li>
                    <Link to="/education">
                        Education quality
                    </Link>
                </li>
                <li>
                    <Link to="/for-students">
                        For students
                    </Link>
                </li>
                <li>
                    <Link to="/for-entrants">
                        For entrants
                    </Link>
                </li>
                <li>
                    <Link to="/for-parents">
                        For parents
                    </Link>
                </li>
                <li>
                    <Link to="/public-info">
                        Public info
                    </Link>
                </li>
                <li>
                    <Link to="/for-grads">
                        For graduates
                    </Link>
                </li>
            </ul>
            <label for="top-toggle" className="menu-button">
                <FaBars />
            </label>
        </>
    ) 
} 
/*
*/

export { MenuButton };
