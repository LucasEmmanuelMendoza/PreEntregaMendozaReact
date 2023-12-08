import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";

import '../estilos/style.css'

const Formulario = ({state, buyer, enviar, handleChange}) =>{
    
    const [secondEmailValue, setSecondEmailValue] = useState('');

    const handleSecondEmail = (event) => {
        setSecondEmailValue(event.target.value);
    }

    const toggleSend = () => {
        
    }

    return(
        <Container>
                <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" onChange={handleChange} value={buyer.name} placeholder="Ingrese su nombre" className="inputForm"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" name="lastName" onChange={handleChange} value={buyer.lastName} placeholder="Ingrese su apellido" className="inputForm"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="number" name="phone" onChange={handleChange} value={buyer.phone} placeholder="Ingrese su teléfono" className="inputForm"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleChange} value={buyer.email}/* {buyer.email} */ placeholder="Ingrese su email" className="inputForm"/>
                    </Form.Group> 
                     
                     <Form.Group className="mb-3" controlId="formBasicEmail2">
                        <Form.Control type="text" value={secondEmailValue} onChange={handleSecondEmail} placeholder="Vuelva a ingresar su email" className="inputForm"/> 
                        <Form.Text className="text-muted">
                            Nunca compartiremos su correo electrónico con nadie más.
                        </Form.Text>
                    </Form.Group> 

                    <div style={{display:"flex", justifyContent:"center", gap:"1rem"}}>
                        
                        <Button onClick={() => state(true)}>Mostrar Carrito</Button>

                        {buyer.email === secondEmailValue && buyer.email != ""?
                            <Button variant="primary" style={{backgroundColor:"green"}} onClick={() => enviar()} >Generar Pedido</Button>
                            : <Button style={{backgroundColor:"green"}} className="btn"
                             onClick={() => 
                                Swal.fire({
                                icon: "error",
                                title: 'Los emails no coinciden o son incorrectos',
                                }) }>Generar Pedido</Button>}
                    </div>
                </Form>
        </Container>
        )
}

const TablaCarrito = ({items, state, deleteItem, limpiar, total}) =>{
    return (
        <Container>
            {/* {items.length > 0?<>{items.length}</>:<>Hola</>} */}
            <Table className="mt-2">
            <thead>
                <tr>
                <th></th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => 
                    <tr key={item.id}>
                        <td><img src={item.pictureUrl} alt={item.title} style={{width:"6rem", height:"7rem"}}/></td>
                        <td style={{fontSize:"1.5rem", marginTop:"1rem", fontWeight:"bold"}}>{item.title}</td>
                        <td style={{fontSize:"1.5rem" , fontWeight:"bold"}}>${item.price}</td>
                        <td style={{fontSize:"1.5rem", fontWeight:"bold"}}>{item.cant}</td>
                        <td><button className="btn" onClick={() => deleteItem(item.id)}>X</button></td>
                    </tr>
                )}
            </tbody>
            </Table>

            <label style={{marginBottom:"1rem", backgroundColor:"yellow", display:"inline-block", borderRadius:".3rem", fontSize:"large", fontWeight:"bold"}}>
                Total: ${total}
            </label>

            <div style={{display:"flex", justifyContent:"center", gap:"1rem"}} >
                <Button onClick={() => state(false)}>Ir a pagar</Button>
                <Button onClick={() => limpiar(true)} style={{backgroundColor:"red"}}>Limpiar carro</Button>
           </div>
        </Container>
      );
}

const AuxCarrito = () => {
    return(
        <Container style={{marginTop:"15%"}}>
        <Row>
          <Col><img src="../imgs/pngwing.com.png" alt="a" style={{width:"20rem"}}/></Col>
          <Col style={{marginTop:"4rem"}}>
            <h2 style={{fontSize:"2rem"}}>Agregue algo al carro de compras</h2>
            <Link to="/">
                <Button className="btn">Productos</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    )
}

export const Cart = () =>{
    const { items, deleteItem, clearCart } = useContext(CartContext);
    const [ tableState, setTableState ]= useState(true);

    const resetBuyer = {
        name:"",
        lastName:"",
        phone:"",
        email:"",
    }

    const [ buyer, setBuyer ] = useState(resetBuyer);

    const total = items.reduce((acumulador, prod) => acumulador += prod.price * prod.cant, 0);  
    
    const sendOrder = ({buyer, items, total}) => {

        const order = {
            buyer,
            items,
            total
        }

        const db = getFirestore();
        const ordenCollection = collection(db, "ordenes");

        addDoc(ordenCollection, order).then(({id}) => {

            if(id){
                Swal.fire({
                    icon: "success",
                    title: `Orden ${id} generada con éxito`,
                });

                clearCart(false);
            }
        })
        
        }//fin send order
    
    const handleChange = (event) =>{

        setBuyer((buyer) => {
            return{ 
                ...buyer,
                [event.target.name]: event.target.value,
                
            }
        });
    }

    return (
        <>
            {items.length > 0 ?
            <>
                {
                    tableState ? <TablaCarrito items={items} state={setTableState} deleteItem={deleteItem} limpiar={clearCart} total={total}/>
                    : <Formulario state={setTableState} buyer={buyer || {}} enviar={() => sendOrder({ buyer, items, total })} handleChange={handleChange}/> 
                }

            </>
            :<AuxCarrito></AuxCarrito>}
        </>
    )
}