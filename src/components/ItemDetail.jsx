import "../estilos/style.css"
import { Button } from "react-bootstrap";

export const ItemDetail = ({item}) => {
    return (
        <> 
            <h1>{item.title}</h1>
            <img src={item.pictureUrl}/>
            <h2>${item.price}</h2> 
            <h3>Stock: {item.stock}</h3>
            <Button> Agregar al carro</Button>
        </>
    )
};