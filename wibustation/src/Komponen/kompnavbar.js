import React from 'react'
import{Nav,Navbar,NavDropdown,Container} from 'react-bootstrap'

const Kompnavbar = () => {
    return (
        <Navbar  variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="#home"><strong>Wibustation</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    )
}

export default Kompnavbar;