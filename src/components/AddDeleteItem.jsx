import { useState } from "react"
import { Button } from "react-bootstrap"

export const AddDeleteItem = ({onAdd, itemStock}) => {
    const [cant, setCant] = useState(1);

    function handleIncrease(){
        if(cant < itemStock){
            setCant(prev => prev + 1)
        }
    }

    function handleDecrease(){
        if(cant > 1){
            setCant(prev => prev - 1)
        }
    }

    function addCant(cant){
        onAdd(cant);
        setCant(1);
    }

    return (
        <> 
            <div className="d-flex justify-content-center gap-2 m-2 mb-3">
                <button className="btn" onClick={() =>handleDecrease()}>-</button>
                <input type="number" className="btn" value={cant} onChange={()=>console.log()}/>
                <button className="btn" onClick={() =>handleIncrease()}>+</button>   
            </div>
            <Button onClick={() => addCant(cant)}>Agregar al carro</Button>
        </>
    )
}