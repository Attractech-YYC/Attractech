import axios from "axios";
import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      corpName: "",
    };
  }

  onCorpNameChange = (e) => {
    this.setState({corpName: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault()

    axios.get("/corporation/"+this.state.corpName)
    .then((res) => {
        localStorage.setItem("corp_public_id", res.data.public_id);
        localStorage.setItem("corp_name", res.data.name);
        window.location.href = "/activities";
    })
    .catch((res) => {
        console.log("error:", res)
    })
  }

  render() {
    let public_id = localStorage.getItem("corp_public_id")
    console.log(public_id);
    if (public_id) {
      window.location.href = "/activities";
      return;
    }
    return (
      <Container>
        <Row>
          <Col> </Col>
          <Col>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Corpration Name</Form.Label>
          <Form.Control value={this.state.corpName} onChange={this.onCorpNameChange} placeholder="Enter Corpration Name" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={this.onSubmit}>
          Login
        </Button>
      </Form>

          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }

}

export default Login;
