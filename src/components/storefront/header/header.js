import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="#home">World's Greatest Online Store</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link>
                            <Link to='/'>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/categories'>Categories</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/details'>Products</Link>
                        </Nav.Link>

                    </Nav>
                </Container>
            </Navbar>




        </>
    )
}

export default Header;