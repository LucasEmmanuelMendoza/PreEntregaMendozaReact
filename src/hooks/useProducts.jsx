import { products } from "../data/products";
import { useEffect, useState } from "react";

export const useProducts = () => {
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        const productsPromise = new Promise((resolve, reject) => {
            resolve(products);
        })

        productsPromise.then(result =>{
            setProductos(result) 
        })
        
    }, [products]);

    return{productos};
}
