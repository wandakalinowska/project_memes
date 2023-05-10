import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <h1>Tytuł strony</h1>
      <ul>
        <li>
          <Link className="nav-link" to="/Hot">
            {" "}
            Hot
          </Link>
        </li>
        <li>
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
