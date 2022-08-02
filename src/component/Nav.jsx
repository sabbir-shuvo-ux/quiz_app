import { Link } from "react-router-dom";
import logo from "../assets/img/logo-bg.png";
import classes from "../styles/nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>

      <Account />
    </nav>
  );
}
