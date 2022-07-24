import axios from 'axios';
import { useState } from 'react';
import { Button, Col, Row, Table, Modal, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Activities() {
  const [ show, setShow ] = useState(false);
  const [ first, setFirst] = useState(true);
  const [ name, setName ] = useState("");
  const [ classify, setClassify ] = useState("");
  const [ costs, setCosts ] = useState("");
  const [ timeCommitment, setTimeCommitment ] = useState("");
  const [ activities, setActivities ] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNameChange = (e) => setName(e.target.value);
  const handleClassifyChange = (e) => setClassify(e.target.value);
  const handleCostsChange = (e) => setCosts(e.target.value);
  const handleTimeCommitmenttsChange = (e) => setTimeCommitment(e.target.value);

  let user = localStorage.getItem("corp_name");
  if (!user) {
    window.location.href = "/";
    return;
  }

  const getActivities = () => {
    axios.get("/corporation/"+user+"/activity")
    .then((res) => {
        setActivities(res.data);
    })
  }
  if (first) {
    getActivities();
    setFirst(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("/activity", {
      corporation_name: user,
      show: show,
      name: name,
      type: "permanent",
      classify: classify,
      costs: costs,
      time_commitment: timeCommitment,
    }).then((res) => {
        console.log("ok", res)
        setShow(false);
        getActivities();
    })
    .catch((res) => {
        console.log("error", res);
    })
  }

  var rows = [];
  for (var idx in activities) {
    rows.push(
      <tr key={idx}>
        <td>{activities[idx].id}</td>
        <td>{activities[idx].name}</td>
        <td>{activities[idx].classify}</td>
        <td>{activities[idx].costs}</td>
        <td>{activities[idx].time_commitment}</td>
      </tr>
    );
  }

  return (
    <Container>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Publish Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Activity Name" value={name} onChange={handleNameChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formClassify">
        <Form.Label>Classify</Form.Label>
        <Form.Control type="email" placeholder="Enter Classify" value={classify} onChange={handleClassifyChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCosts">
        <Form.Label>Costs</Form.Label>
        <Form.Control type="email" placeholder="Enter Costs" value={costs} onChange={handleCostsChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTimeCommitment">
        <Form.Label>Time Commitment</Form.Label>
        <Form.Control type="email" placeholder="Enter Time Commitment" value={timeCommitment} onChange={handleTimeCommitmenttsChange} />
      </Form.Group>
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Publish
          </Button>
        </Modal.Footer>
      </Modal>

      <Row>
        <Col></Col>
        <Col></Col>
        <Col><Button type="primary" onClick={handleShow}>Publish Activity</Button></Col>
      </Row>
      <Row><Col>&nbsp;</Col></Row>
      <Row>
      <Col>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Classify</th>
          <th>Costs</th>
          <th>Time Commitment</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Activities;
