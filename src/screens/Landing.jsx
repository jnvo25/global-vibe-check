import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Stars from '../components/Stars.jsx';
import './Landing.css';



export default function Landing() {
    
    return (
        <Container>
            {/*<div className="landing-page">*/}
            <div style={{paddingTop: "100px"}}>
                <Stars />
                <Row className="pb-5">
                    <Col><h2>Welcome to Global Vibe Check!</h2></Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="mx-auto pt-4 pb-2 pl-5 pr-5 welcome-text" style={{backgroundColor: "#1C4772", width: "30em"}}>
                            <Card.Title>
                                How are countries around the world doing in terms of COVID-19 cases?
                            </Card.Title>
                            <Card.Body>
                                <Card.Text >
                                    This website has information on the covid cases, deaths and severity status of other countries around the world. Wondering how other are doing compared to your country, CLICK the get started button below.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className={"pt-4 pb-5"}>
                    <Col>
                        <LinkContainer  to="/globe">
                            <Button variant="success" id="launch-btn">Get started!</Button>
                        </LinkContainer>
                    </Col>
                </Row>
                <Row className="pb-5"><br /></Row>
            </div>
        </Container>
    );
}