import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Button } from 'react-bootstrap'

function Navigation({movePage}) {
    return (
        <Navbar className="mb-4 header mt-auto" bg="dark" variant="dark" expand="md">
            <div className="container">
                <Navbar.Brand className=" fs-3 brand-name navbar-brand" href="/">Attractech</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="fs-5 ms-auto">
                        <Button onClick={() =>{movePage("Create")}}>Create</Button>
                        {/* <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/app">App</Link> */}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Navigation

