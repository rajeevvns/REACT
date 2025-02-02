import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { cartContext } from '..';
import { observer } from 'mobx-react-lite';


function NavbarComponent() {
    let cartStore = useContext(cartContext); 
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Adobe</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/products">Products</Nav.Link>
                    <Nav.Link as={Link} to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} color='white' />
                        <Badge>{cartStore.count}</Badge>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/new_product">New Product</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default observer(NavbarComponent);
