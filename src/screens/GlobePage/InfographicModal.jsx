import react from 'react';
import './InfographicModal.css';
import {Modal, Button, Card, ListGroupItem, ListGroup, Row, Col} from 'react-bootstrap';



function InfographicModal(props) {
    function handleClick() {
        props.setShow(false);
    }
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                    <Card>
                        <Card.Img variant="top" className="card-image" src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80" />
                        <Card.Body>
                            <Card.Title>
                                <Row>
                                    <Col xs={3}>
                                        <h2 class ="card-text">{props.name}</h2>
                                    </Col>
                                    <Col xs={9}>
                                        <p class = "card-vibe">| Vibes are immaculate</p>
                                    </Col>
                                </Row>
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="card-description">Active COVID-19 cases: 0</ListGroupItem>
                            <ListGroupItem className="card-description">New cases (today): 0</ListGroupItem>
                            <ListGroupItem className="card-description">Ranked _th in the world in COVID cases (as % of population)</ListGroupItem>
                        </ListGroup>
                        <Card.Body className="card-links">
                            <Card.Link href="#">CDC Analysis</Card.Link>
                            <Card.Link href="#">Travel Forms</Card.Link>
                        </Card.Body>
                    </Card>
                <Modal.Footer>
                    <Button onClick={handleClick}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default InfographicModal;