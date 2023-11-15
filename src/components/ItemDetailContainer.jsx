import Container from 'react-bootstrap/Container'
import { useState, useEffect } from "react"
import { products } from "/src/data/products.js"
import { useParams } from "react-router-dom" 
import "../estilos/style.css"
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(products);
            }, 1000);
        })

        myPromise.then((response) => {
            const findById = response.find((item) => item.id === Number(id));
            setItem(findById);
            console.log(findById.id);
        });

    }, [id]);
    
    return (
        <Container className='cardsContainer mt-2'>
            { item ? <ItemDetail item={item}/> : <>...</> }
        </Container>
    );
};
