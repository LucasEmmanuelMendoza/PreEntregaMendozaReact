import Container from 'react-bootstrap/Container'
import { useState, useEffect } from "react"
import { products } from "/src/data/products.js"
import { useParams } from "react-router-dom"
import { ItemList } from './ItemList';
import "../estilos/style.css"

export const ItemListContainer = () =>{
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(products);
            }, 2000);
        })

        myPromise.then((response) => {
            if(!id){
                setItems(response);
            }else{
                const filterByCategory = response.filter( (item) => item.category == id);
                setItems(filterByCategory);
            }
        });

    }, [id]);
    
    return (
        <Container className='cardsContainer mt-2'>
            <ItemList items={items}/>
        </Container>
    );
};
