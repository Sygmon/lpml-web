import { Link } from "react-router-dom";
import '../scss/App.scss';
import Lorem from './Lorem.js';

function Applet(props) {
  return (
    <div className="Applet">
      <div className="flex">
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
