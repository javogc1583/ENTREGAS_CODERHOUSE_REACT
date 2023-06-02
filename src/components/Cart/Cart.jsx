import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Table } from "react-bootstrap";


export const Cart = () => {
    const {cart, clearCart} = useContext(CartContext)
    
    const totalQuantity = () =>
        cart.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity,
            0
        )

    const totalCostos = () =>
        cart.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.price,
            0
        )

    if(totalQuantity() === 0){
        return(
            <Container style={{textAlign:'center'}}>
                <h1>No hay items en el carrito</h1>
                <Link to={'/'}> 
                    <Button variant="dark" style={{width: '50%'}}><span>Productos</span></Button>
                </Link> 
            </Container>
        )
    }

    return (
        <Container>
            <Table striped >
                <thead>                    
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                    </tr>               
                </thead>
                <tbody>
                    {cart.map(p => <CartItem key={p.id} {...p} />)}                                
                    <tr>
                        <td><h3>Total:</h3></td>
                        <td>&nbsp;</td>
                        <td><h3>${totalCostos()}</h3></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </Table>
            
            <Container>
                <Row>
                    <Col>
                        <Button variant="dark" style={{width: '100%'}} onClick={() => clearCart()}><span>Limpiar carrito</span></Button>
                    </Col>
                    <Col>
                        <Link to={'/checkout'}> 
                            <Button variant="dark" style={{width: '100%'}}><span>Checkout</span></Button>
                        </Link> 
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}