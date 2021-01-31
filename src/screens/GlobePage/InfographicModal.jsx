import react from 'react';
import './InfographicModal.css';
import {Modal, Button, Card, ListGroupItem, ListGroup, Row, Col} from 'react-bootstrap';
import LoadingOverlay from 'react-loading-overlay';



function InfographicModal(props) {

    function handleClick() {
        props.setShow(false);
    }

    function suffix(number) {
        const lastDigit = number % 10;
        if (lastDigit === 1) {
            return 'st';
        } else if (lastDigit === 2) {
            return 'nd';
        } else if (lastDigit === 3) {
            return 'rd';
        } else {
            return 'th';
        }
    }

    function getVibes(risk) {
        if (risk >= 0.5) {
            return "horrendous";
        } else if (risk >= 0.15) {
            return "off";
        } else if (risk >= 0.05) {
            return "aight";
        } else {
            return "immaculate";
        }
    }

    function colorByRisk(risk) {
        if (risk >= 0.5) {
            return "rgb(200, 0, 255)";
        } else if (risk >= 0.15) {
            return "rgb(255, 0, 0)";
        } else if (risk >= 0.05) {
            return "rgb(255, 165, 0)";
        } else {
            return "rgb(255, 230, 0)";
        }
    }

    function travelSite(country, city) {
        if (country === "United States of America") {
            country = "usa";
        } else if (country === "United Kingdom") {
            country = "the-united-kingdom";
        }
        return "https://www.lonelyplanet.com/" + country.toLowerCase().split(' ').join('-') + '/' + city.toLowerCase().split(' ').join('-');
    }

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <LoadingOverlay
                    active={props.isLoading}
                    spinner
                    text='Loading...'
                >
                <Modal.Header closeButton>
                </Modal.Header>
                    <Card>
                        <Card.Img variant="top" className="card-image" src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80" />
                        <Card.Title style={{padding: "20px 0px 0px 20px", color: colorByRisk(props.vacStats.Infection_Risk)}}>{props.name}, {props.country} | Vibes are {getVibes(props.vacStats.Infection_Risk)}</Card.Title>
                        <Card.Body>

                            

                            
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">

                            <ListGroupItem>Active COVID-19 cases in {props.country}: <strong>{props.covidStats.confirmed - props.covidStats.recovered - props.covidStats.deaths}</strong></ListGroupItem>
                            <ListGroupItem>New cases (today): <strong>{props.vacStats.NewCases}</strong></ListGroupItem>
                            <ListGroupItem>{props.country} ranked <strong>{props.countryRanking}{suffix(props.countryRanking)}</strong> in the world in active COVID-19 cases (as a percentage of the population)</ListGroupItem>
                            <ListGroupItem></ListGroupItem>
                        </ListGroup>
                        <Card.Body className="card-links">
                            <Card.Link href={props.cdcUrl} target="_blank">CDC Travel Recommendations</Card.Link>
                            <Card.Link href={travelSite(props.country, props.name)} target="_blank">Travel Guide</Card.Link>
                        </Card.Body>
                    </Card>
                <Modal.Footer>
                    <Button onClick={handleClick}>Close</Button>
                </Modal.Footer>
                </LoadingOverlay>
            </Modal>
        </div>
    );
}

export default InfographicModal;