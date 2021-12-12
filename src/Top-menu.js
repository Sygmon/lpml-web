import { FaBars } from 'react-icons/fa';
import './App.scss';
import './scss/Topbar.scss';

function MenuButton() {
    return (
        <>
            <input id="top-toggle" type="checkbox"/>
            <ul className="links">
                <li>
                    <a href="/about">
                        About
                    </a>
                </li>
                <li>
                    <a href="/community">
                        Community
                    </a>
                </li>
                <li>
                    <a href="/education">
                        Education quality
                    </a>
                </li>
                <li>
                    <a href="/for-students">
                        For students
                    </a>
                </li>
                <li>
                    <a href="/for-entrants">
                        For entrants
                    </a>
                </li>
                <li>
                    <a href="/for-parents">
                        For parents
                    </a>
                </li>
                <li>
                    <a href="/public-info">
                        Public info
                    </a>
                </li>
                <li>
                    <a href="/for-grads">
                        For graduates
                    </a>
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
