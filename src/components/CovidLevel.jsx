import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './CovidLevel.css';

function CovidLevel(props) {
    return (
        <div className="covid-level">
            <Row>
                <Col sm={3} md={3}>
                    <br /><br />
                    <span className="color-square" style={{ backgroundColor: props.color}}></span>
                </Col>
                <Col sm={6} md={6} className="information">
                    <h2 className="level-name">{props.name}</h2 >
                    <h4 className="level-criteria">{props.criteria}</h4>
                    <p className="travel-warnings" style={{color: props.color, opacity: "70%"}}>{props.travelWarning}</p>
                </Col>
            </Row>
        </div>
    );
}

export default CovidLevel;