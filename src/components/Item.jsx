import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const Item = ({ item }) =>{
    return(
        <>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src={item.pictureUrl} className='img'/>
                <Card.Body className='card_body'>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Link to={`/items/${item.id}`}>
                        <Button variant="primary">Ver Más</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

