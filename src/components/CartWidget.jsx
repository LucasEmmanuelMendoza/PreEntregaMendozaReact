import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
       
export const CartWidget = () =>{
    const {items} = useContext(CartContext);

    const totalItems = items.reduce((total, item) => total + item.cant , 0);

    return (
        <>
            <Link to="/cart" className="navLink">
                 <img src="https://w7.pngwing.com/pngs/833/426/png-transparent-black-shopping-cart-icon-for-free-black-shopping-cart-icon.png" alt="cart img" width={40} />
            </Link>
            
            <span>{totalItems}</span>
        </>
    );
}