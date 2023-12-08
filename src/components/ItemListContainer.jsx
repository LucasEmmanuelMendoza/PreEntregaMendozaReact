import Container from 'react-bootstrap/Container'
import { useState, useEffect } from "react" 
import { useFetcher, useParams } from "react-router-dom"
import { ItemList } from './ItemList';
import {getFirestore, getDoc, doc, collection, getDocs, snapshotEqual, query, where, limit} from "firebase/firestore";//esto en el archivo que vaya a usar el firestore
import "../estilos/style.css"

export const ItemListContainer = () =>{
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refCollection = !id
            ? collection(db, "items")//si no hay id traigo todo
            : query(collection(db, "items"), where("category", "==", id));//si hay id traigo solo el item

        getDocs(refCollection).then((snapshot) => {
            if(snapshot.size === 0) console.log("Sin datos");
            else
                setItems(
                    snapshot.docs.map((doc) => {
                        return{ id: doc.id, ...doc.data()}
                    })
                );
        });
    }, [id]);

    return (
        <div>
            {!items.length ? (
                <h1>Loading...</h1>
            ):(
                <Container className='cardsContainer mt-2'>
                    <ItemList items={items}/>
                </Container>
            )}
        </div>
    );
};
