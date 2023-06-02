import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import products from "../../data/products.json";

import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {

    const [itemsMenu, setItemsMenu] = useState([]);
    useEffect(() => {
        const productList = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 0)
        })
        productList
            .then(result => {
                const categories = result.map(item => item.category)
                const uniqueCateogries =  new Set(categories)
                setItemsMenu([...uniqueCateogries].sort())
            })
            .catch(error => console.log(error))
    }, [])


    return (

            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Soccer People</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/" className={'nav-link'}>Home</NavLink>
                        {itemsMenu?.map(item =>
                            <NavLink key={item} to={`/category/${item}`} className={'nav-link'}>
                                {item.toUpperCase()}
                            </NavLink>                            
                            )
                        }
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>

    )
}