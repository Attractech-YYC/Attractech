import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <Navbar className="mb-5" bg="dark" variant="dark" expand="md">
            <div className="container">
                <Navbar.Brand className=" fs-3 brand-name navbar-brand" href="#home">Attractech</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="fs-5 ms-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/app">App</Link>
                        <Link className="nav-link" to="/create-post">Company Post</Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Navigation

