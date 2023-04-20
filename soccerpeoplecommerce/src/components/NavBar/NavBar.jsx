import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Soccer People</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Sección 1</Nav.Link>
                        <Nav.Link href="#pricing">Sección 2</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>

            
        </header>
    )
}