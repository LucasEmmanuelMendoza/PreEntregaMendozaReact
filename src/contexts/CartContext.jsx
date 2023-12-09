import { createContext,useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const clearCart = (alertar) => {
        setItems([]);
        
        if(alertar){
            Swal.fire({
                icon: "success",
                title: `Carrito borrado`,
              });
        }
    }

   const addItem = (prod, cant) => {
        if(prod.stock < cant){
            Swal.fire({
                icon: "error",
                title: "No hay stock disponible",
              });
        }
        else{
            const exists = items.some((prodCart) => prodCart.id === prod.id);

            if(!exists){
                const itemMod = {...prod, cant};
                setItems((prev) => {
                    return [...prev, itemMod];
                })
            }else{
                
                const filtrados = items.map((prodStock) => {
                    if(prodStock.id === prod.id){
                         return{
                            pictureUrl: prod.pictureUrl, 
                            id: prod.id,
                            title: prod.title,
                            description: prod.description,
                            cant: prodStock.cant + cant,
                            price: prod.price,
                        }
                    }else{
                        return prodStock;
                    }
                })
                setItems(filtrados);
            }
            prod.stock -= cant;
            
            Swal.fire({
                icon: "success",
                title: `Agregaste ${cant} '${prod.title}' al carro`,
              });
        } 
    }

    const deleteItem = (id) => {
        const filterItems = items.filter((elem) => elem.id !== id);
        setItems(filterItems);

        const prodEliminado = items.find((elem) => elem.id === id);

        Swal.fire({
            icon: "success",
            title: `Eliminaste '${prodEliminado.title}' del carro`,
          });
    }

    
    return(
        <CartContext.Provider value={{items, addItem, clearCart, deleteItem}}>
            {children}
        </CartContext.Provider>   
    )
}