import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom";

function Header() {
  let user = localStorage.getItem("corp_name");

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/activities">Cale</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/activities">Activities</Nav.Link> */}
            {/* <Nav.Link href="/Likes">Likes</Nav.Link> */}
            <Link className="nav-link" to="/activities">Activities</Link>
            <Link className='nav-link' to="/Likes">Likes</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          { user ? <Navbar.Text>Signed in as: <span className="text-primary">{user}</span></Navbar.Text> : <span>s</span>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
