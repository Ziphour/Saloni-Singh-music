// Sidebar.jsx
import { Link } from "react-router-dom";
import home from "../assets/home.png"; // Adjust the path based on your structure
import contact from "../assets/email.png"; // Adjust the path based on your structure
import about from "../assets/info.png"; // Adjust the path based on your structure
import music from "../assets/sound-waves.png"; // Adjust the path based on your structure

const Sidebar = () => (
  <div className="sidebar">
    <div className="social-icons">
      <Link to="/">
        <div>
          <img src={home}></img>
        </div>
      </Link>
      <Link to="/about">
        <div>
          <img src={about}></img>
        </div>
      </Link>
      <Link to="/music">
        <div>
          <img src={music}></img>
        </div>
      </Link>
      <Link to="/contact">
        <div>
          <img src={contact}></img>
        </div>
      </Link>
      {/* Turn these into images, look up */}
    </div>
  </div>
);

export default Sidebar;
