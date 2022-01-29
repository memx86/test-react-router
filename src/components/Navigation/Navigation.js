import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./Navigation.module.css";

function Navigation(props) {
  return (
    <nav className={s.nav}>
      <Link to="/">Main</Link> | <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
    </nav>
  );
}

Navigation.propTypes = {};

export default Navigation;
