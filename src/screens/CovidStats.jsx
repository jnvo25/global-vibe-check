import react from 'react';
import Stars from '../components/Stars.jsx';

import { Container, Row, Col, Card } from 'react-bootstrap';


export default function CovidStats() {
    return (
        
        <div class="covid-stats-container">
            <Stars />
            <div className="wrapper">
            <div className="pt-5"></div>
        
       
                <header>
                    <div className="Heading-for-the-page">
                        <h1 class="text-white font-weight-light pb-1 pt-1 text-middle">Vibes are Horrendous</h1>
                        <h6 class="text-light font-weight-light pb-1 pt-1 text-middle">Last update: January 30, 2021, 22:31 GMT</h6>
                    </div>
                </header>
            <div className="pt-5"></div>
            <div className="pt-5"></div>
            <div className="pt-5"></div>
            <div className="pt-5"></div>
                <div className="Both-cards-with-text">
                <Container>
                        <Row>
                            <Col md={8}>
                            
                            <Card style={{ height: '25rem', width: '25rem', backgroundColor: '#d6adff'}}>
                                <Card.Body>
                                <Card.Text>
                                
                                <p>
                                <header>
                                    <h5 class="text-white font-weight-light pb-3 pt-3 text-middle">Coronavirus cases:</h5>
                                    <h1 class= "text-primary number valign-text-middle roboto-normal-purple-pizzazz-62px">12345</h1>
                                    <h5 class="text-white font-weight-light pb-3 pt-2 text-middle">Active cases:</h5>
                                    <h1 class="text-info number valign-text-middle roboto-normal-purple-pizzazz-62px">12345</h1>
                                    <h5 class="text-white font-weight-light pb-3 pt-2 text-middle">Recovered:</h5>
                                    <h1 class="text-success number valign-text-middle roboto-normal-purple-pizzazz-62px">12345</h1>
                                </header>
                                </p>
                                
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>

                            <Col>
                            <Card style={{ height: '25rem', width: '25rem', backgroundColor: '#c285ff' }}>
                                <Card.Body>
                                <Card.Text>
                                
                                <p>
                                <header>
                                    <h5 class="text-white font-weight-light pb-3 pt-3 text-middle">Patients in critical condition:</h5>
                                    <h1 class="text-danger number valign-text-middle roboto-normal-purple-pizzazz-62px">12345</h1>
                                    <h5 class="text-white font-weight-light pb-3 pt-2 text-middle">Patients in moderate conditions:</h5>
                                    <h1 class="text-warning number valign-text-middle roboto-normal-purple-pizzazz-62px">12345</h1>
                                    <h5 class="text-white font-weight-light pb-3 pt-2 text-middle">Deaths:</h5>
                                    <h1 class="text-dark number valign-text-middle roboto-normal-purple-pizzazz-62px">12345</h1>
                                </header>
                                </p>
                                
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </div>
            <div className="pt-5"></div>
            <div className="pt-5"></div>
            <div className="pt-5"></div>
            <div className="pt-5"></div>
            
        </div>
        
    );
}