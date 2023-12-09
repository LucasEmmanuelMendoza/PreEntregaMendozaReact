import Container from 'react-bootstrap/Container'
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom" 
import "../estilos/style.css"
import { ItemDetail } from './ItemDetail';
import { getDoc, getFirestore, doc } from 'firebase/firestore'

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null);
    const { id } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProds = async () => {

            const db = getFirestore();
            const refDoc = doc(db, "items", id);

            try {
                const snapshot = await getDoc(refDoc);
                if(snapshot.exists()){
                    setItem({ id: snapshot.id, ...snapshot.data() });
                }else{
                    navigate('/error');
                }
            }catch(error){
                console.log('productos no encontrados');
            }
        }

        fetchProds();

    }, [id, navigate]); 

    return (
        <Container className=' '>
            { item ? <ItemDetail item={item}/> : <h1>Loading....</h1> }
        </Container>
    );
};