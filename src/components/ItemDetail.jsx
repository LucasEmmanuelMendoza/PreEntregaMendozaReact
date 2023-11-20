import "../estilos/style.css"
import { Button } from "react-bootstrap";

export const ItemDetail = ({item}) => {
    return (
        <div className="mt-2"> 
            <h1>{item.title}</h1>
            <img src={item.pictureUrl} className="imgDetail"/>
            <div className="mt-2 priceStock">
                <h2>${item.price}</h2> 
                <Button> Agregar al carro</Button>
                <h3>Stock: {item.stock}</h3>
            </div>
        </div>
    )
};