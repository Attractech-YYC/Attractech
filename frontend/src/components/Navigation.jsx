import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand className=" fs-3 brand-name navbar-brand ms-3" href="#home">Attractech</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="fs-5 ms-auto me-3">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#app">App</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation

