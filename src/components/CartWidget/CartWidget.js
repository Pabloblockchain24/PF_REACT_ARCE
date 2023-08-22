import { useContext } from "react";
import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {totalUnidades} = useContext(CartContext)

  return (
    <Link to="/cart" className="customCart"  >
      <FaShoppingCart className="m-1"/>
      {totalUnidades}
    </Link>
  );
};
export default CartWidget;
