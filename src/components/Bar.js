import { Link } from "react-router-dom";
import '../scss/App.scss';
import '../scss/Sidebar.scss';

function Menu(props) {
    return (
        <>
			<nav className="top-bar">
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
					<li>
							<button 
        					    className="menu-button bottom"
        					    onClick={props.themeSwitcher}
        					    >
        					        {props.text}
        					</button>
					</li>
					<li>
							<Link to="/" className="bottom">
									Gimme the god forsaken svg already (home)
        					</Link>
					</li>
				</ul>
			</nav>
        </>
    ) 
} 
/*
*/

export default Menu;
