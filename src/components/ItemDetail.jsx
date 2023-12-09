import "../estilos/style.css"
import { AddDeleteItem } from "./AddDeleteItem";
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext);

    const add = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="mt-2"> 
            <h1>{item.title}</h1>
            <img src={item.pictureUrl} className="imgDetail"/>
                <h2>{item.description}</h2> 
            <div className="mt-2 priceStock">
                <h2>${item.price}</h2>
                <h3>Stock: {item.stock}</h3>
            </div>

            <AddDeleteItem onAdd={add} itemStock={item.stock}></AddDeleteItem>
        </div>
    )
};