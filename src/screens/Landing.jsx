import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Landing.css';

function generateRandomStars() {
    var dimensions = Math.floor(Math.random() * 10 + 1);
    return {
        position: "fixed",
        borderRadius: "50%",
        backgroundColor: "#FFFFFF",
        left: String(Math.floor(Math.random() * 100 + 1)) + "%",
        top: String(Math.floor(Math.random() * 100 + 1)) + "%",
        height: dimensions,
        width: dimensions,
        boxShadow: "0px 0px 10px yellow",
    }
}

export default function Landing() {
    const numStars = 40;
    const stars = [];
    for (let i = 0; i < numStars; i++) {
<<<<<<< HEAD
        stars.push(<span className="star" style={generateRandomStars()}></span>);
=======
        stars.push(<span className="star" style={generateRandomStyle()} />);
>>>>>>> 667cea27b4d13cc2644d47575cd483416eafee48
    }
    return (
        <Container>
            {/*<div className="landing-page">*/}
            <div style={{paddingTop: "100px"}}>
                {stars}
                <Row className="pb-5">
                    <Col><h2>Welcome to Global Vibe Check!</h2></Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="mx-auto pt-4 pb-2" style={{backgroundColor: "#1C4772", width: "30em"}}>
                            <Card.Title>
                                How are countries around the world doing in terms of COVID-19 cases?
                            </Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    This website has information on the covid cases, deaths and severity status of other countries around the world. Wondering how other are doing compared to your country, CLICK the get started button below.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className={"pt-4"}>
                    <Col>
                        <LinkContainer  to="/globe">
                            <Button variant="success">Get started!</Button>
                        </LinkContainer>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}