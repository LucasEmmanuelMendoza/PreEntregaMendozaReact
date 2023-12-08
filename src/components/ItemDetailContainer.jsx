import Container from 'react-bootstrap/Container'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom" 
import "../estilos/style.css"
import { ItemDetail } from './ItemDetail';
import { getDoc, getFirestore, doc } from 'firebase/firestore'

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() });
        });
    }, [id]); 

    return (
        <Container className='cardsContainer mt-2'>
            { item ? <ItemDetail item={item}/> : <h1>Loading....</h1> }
        </Container>
    );
};