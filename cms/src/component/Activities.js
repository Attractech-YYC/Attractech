import axios from 'axios';
import { useState } from 'react';
import { Button, Col, Row, Table, Modal, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Activities() {
  const [ show, setShow ] = useState(false);
  const [ first, setFirst] = useState(true);
  const [ name, setName ] = useState("");
  const [ desc, setDesc ] = useState("");
  const [ classify, setClassify ] = useState("Food");
  const [ costs, setCosts ] = useState("Free");
  const [ timeCommitment, setTimeCommitment ] = useState("15 mins");
  const [ activities, setActivities ] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNameChange = (e) => setName(e.target.value);
  const handleClassifyChange = (e) => setClassify(e.target.value);
  const handleCostsChange = (e) => setCosts(e.target.value);
  const handleDescChange = (e) => setDesc(e.target.value);
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
      description: desc,
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
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Activity Name" value={name} onChange={handleNameChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter Description" value={desc} onChange={handleDescChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formClassify">
        <Form.Label>Classify</Form.Label>
        <Form.Select aria-label="Classify" value={classify} onChange={handleClassifyChange}>
          <option value="Food">Food</option>
          <option value="Sport">Sport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Culture">Culture</option>
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCosts">
        <Form.Label>Costs</Form.Label>
        <Form.Select aria-label="Costs" value={costs} onChange={handleCostsChange}>
          <option value="Free">Free</option>
          <option value="$25">$25</option>
          <option value="$100">$100</option>
          <option value="$150">$150</option>
          <option value="$200">$200</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTimeCommitment">
        <Form.Label>Time Commitment</Form.Label>
        <Form.Select aria-label="Time Commitment" value={timeCommitment} onChange={handleTimeCommitmenttsChange}>
          <option value="15 mins">15 mins</option>
          <option value="30 mins">30 mins</option>
          <option value="1 hour">1 hour</option>
          <option value="2 hours">2 hours</option>
          <option value="3 hours">3 hours</option>
          <option value="4+ hours">4+ hours</option>
        </Form.Select>
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
