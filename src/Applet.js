import { Link } from "react-router-dom";
import './App.scss';
import Lorem from './Lorem.js';

function Applet(props) {
  return (
    <div className="Applet">
      <div className="flex">
        <div>
          <img
            src="https://picsum.photos/200/300?random=1"
            alt="tmp"
            className="img"
            />
        </div>
        <div>
          <h2>Lorem Ipsum</h2>
          <Lorem className="lorem"/>
          <Link className="button" to={props.link}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Applet;
