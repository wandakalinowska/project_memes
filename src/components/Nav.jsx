import "../style/Nav.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireAlt } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="nav">
      <div className="nav-title">
        <p>Memes</p>
        <p>project</p>
      </div>
      <ul>
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link className="nav-link" to="/">
            {" "}
            Home
          </Link>
        </li>
        <li className={splitLocation[1] === "Hot" ? "active" : ""}>
          <Link className="nav-link" to="/Hot">
            {" "}
            <FontAwesomeIcon icon={faFireAlt} className="nav-icon" />
            Hot
          </Link>
        </li>
        <li className={splitLocation[1] === "Regular" ? "active" : ""}>
          <Link className="nav-link" to="/Regular">
            {" "}
            Regular
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
