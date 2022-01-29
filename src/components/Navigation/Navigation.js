import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation(props) {
  return (
    <nav className={s.nav}>
      <Link to="/">Main</Link> | <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
    </nav>
  );
}

export default Navigation;
