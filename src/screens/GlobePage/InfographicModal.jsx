import React from 'react';
import {Modal, Button, Card, ListGroupItem, ListGroup, Row, Col} from 'react-bootstrap';
import LoadingOverlay from 'react-loading-overlay';

import './InfographicModal.css';

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
                        <Card.Img variant="top" className="card-image" src={props.imageURL.replace(/['"]+/g, '')} />
                        <Card.Title style={{padding: "20px 0px 0px 20px", color: props.vacStats !== undefined ? colorByRisk(props.vacStats.Infection_Risk) : "gray"}}>{props.name}, {props.country} | Vibes are {props.vacStats !== undefined ? getVibes(props.vacStats.Infection_Risk) : "..not found"}</Card.Title>
                        <Card.Body>

                        </Card.Body>
                        <ListGroup className="list-group-flush">

                            <ListGroupItem>Active COVID-19 cases in {props.country}: <strong>{props.covidStats.confirmed - props.covidStats.recovered - props.covidStats.deaths}</strong></ListGroupItem>
                            <ListGroupItem>New cases (today): <strong>{props.vacStats !== undefined ? props.vacStats.NewCases: 0}</strong></ListGroupItem>
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