import { Link } from "react-router-dom";
import {FaPlus,
		FaComments,
		FaBook,
		FaScroll,
		FaLeanpub,
		FaInfo,
		FaInfoCircle,
		FaGraduationCap
} from "react-icons/fa";
import '../scss/App.scss';
import '../scss/Sidebar.scss';

function Menu(props) {
    return (
        <>
			<nav className="top-bar">
				<ul className="links">
            	    <li>
							<Link to="/about">
								<div className="li-container">
								<p className="text">About</p>
								<FaPlus className="icon"/>
								</div>
							</Link>
            	    </li>
            	    <li>
							<Link to="/community">
								<div className="li-container">
								<p className="text">Community</p>
								<FaComments className="icon"/>
								</div>
            	        	</Link>
            	    </li>
            	    <li>
		    	             <Link to="/education">
								<div className="li-container">
								<p className="text">Education quality</p>
								<FaBook className="icon"/>
								</div>
   		    	             </Link>
            	    </li>
            	    <li>
		    	             <Link to="/for-students">
								<div className="li-container">
								<p className="text">For students</p>
								<FaScroll className="icon"/>
								</div>
   		    	             </Link>
            	    </li>
            	    <li>
		    	             <Link to="/for-entrants">
								<div className="li-container">
								<p className="text">For entrants</p>
								<FaLeanpub className="icon"/>
								</div>
   		    	             </Link>
            	    </li>
            	    <li>
		    	             <Link to="/for-parents">
								<div className="li-container">
								<p className="text">For parents</p>
								<FaInfo className="icon"/>
								</div>
   		    	             </Link>
            	    </li>
            	    <li>
		    	             <Link to="/public-info">
								<div className="li-container">
								<p className="text">Public info</p>
								<FaInfoCircle className="icon"/>
								</div>
   		    	             </Link>
            	    </li>
            	    <li>
		    	             <Link to="/for-grads">
								<div className="li-container">
								<p className="text">For graduates</p>
								<FaGraduationCap className="icon"/>
								</div>
   		    	             </Link>
            	    </li>
					<li className="bottom">
						<div>
							<button 
        					    className="menu-button bottom"
        					    onClick={props.themeSwitcher}
        					    >
        					        {props.text}
        					</button>
							<Link to="/" className="bottom">
									Gimme the god forsaken svg already (home)
        					</Link>
						</div>
					</li>
				</ul>
			</nav>
        </>
    ) 
} 
/*
*/

export default Menu;
