import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="customNavbar">
      <div className="centrarDiv">
      <NavLink to={"/"}><img src={require("../Assets/logoTienda.png")} alt="logo tienda" /> </NavLink>
      </div>
      <div className="centrarDiv customNavbarItems">
        <NavLink to={"/categoria/HOMBRE"} className="customLink"> HOMBRE </NavLink>
        <NavLink to={"/categoria/MUJER"} className="customLink"> MUJER </NavLink>
        <NavLink to={"/categoria/ACCESORIOS"} className="customLink"> ACCESORIOS </NavLink>
      </div>
      <div className="centrarDiv">
        <CartWidget className="customCart"> </CartWidget>
      </div>
    </div>
  );
}

export default NavBar;
