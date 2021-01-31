import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Stars from '../components/Stars.jsx';
import cartoon from '../assets/earth_dead.png';



class CovidStats extends React.Component {
    constructor() {
        super();
        this.state = {
            globalStats: []
        }
    }

    async componentDidMount() {
        await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
            {
                headers: {
                    "x-rapidapi-key": window.env.RAPID_API_KEY,
                    "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
                    "useQueryString": true
                }
            })
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                this.setState({
                    globalStats: res[0]
                });
                console.log(this.state.globalStats);
            })
            .catch((err) => console.log(err));
    }

    render() {

        function getCurrentDateTime() {
            const date = new Date();
            return date.toGMTString();
        }

        return (

            <div class="covid-stats-container">
                <Stars />
                <img src={cartoon} style={{
                    position: "absolute",
                    left: "42%",
                    top: "50%",
                    height: "40%",
                    width: "20%",
                }} alt="" />
                <div className="wrapper">

                    <header>
                        <div className="Heading-for-the-page">
                            <h1 class="text-white font-weight-light pb-1 pt-1 text-middle" ><div style={{ color: "#c64dff" }}>The Vibes are Horrendous  (Global Statistics)</div></h1>
                            <h6 class="text-light font-weight-light pb-1 pt-1 text-middle" ><div style={{ color: "#c4c4c4" }}>Last update: {getCurrentDateTime()}</div></h6>
                        </div>
                    </header>
                    <div className="pt-5"></div>

                    <div className="Both-cards-with-text">
                        <Container>
                            <Row>
                                <Col md={8}>

                                    <Card style={{ height: '25rem', width: '25rem', backgroundImage: 'linear-gradient(#dbb8ff, #c524ff)', borderRadius: "30px" }}>
                                        <Card.Body>
                                            <Card.Text>

                                                <p>
                                                    <header>
                                                        <h5 class="text-white font-weight-light pb-3 pt-3 text-middle">Coronavirus cases:</h5>
                                                        <h1 class="text-primary number valign-text-middle roboto-normal-purple-pizzazz-62px">{this.state.globalStats.TotalCases}</h1>
                                                        <h5 class="text-white font-weight-light pb-3 pt-2 text-middle">Active cases:</h5>
                                                        <h1 class="text-info number valign-text-middle roboto-normal-purple-pizzazz-62px">{this.state.globalStats.TotalCases - this.state.globalStats.TotalRecovered - this.state.globalStats.TotalDeaths}</h1>
                                                        <h5 class="text-white font-weight-light pb-3 pt-2 text-middle">Recovered:</h5>
                                                        <h1 class="text-success number valign-text-middle roboto-normal-purple-pizzazz-62px">{this.state.globalStats.TotalRecovered}</h1>
                                                    </header>
                                                </p>

                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card style={{ height: '25rem', width: '25rem', backgroundImage: 'linear-gradient(#dbb8ff, #c524ff)', borderRadius: "30px" }}>
                                        <Card.Body>
                                            <Card.Text>

                                                <p>
                                                    <header>
                                                        <h5 class="text-white font-weight-light pb-3 pt-3 text-middle">Patients in critical condition:</h5>
                                                        <h1 class="text-danger number valign-text-middle roboto-normal-purple-pizzazz-62px">{this.state.globalStats.Serious_Critical}</h1>
                                                        <h5 class="text-white font-weight-light pb-3 pt-2 text-middle">Patients in moderate condition:</h5>
                                                        <h1 class="text-warning number valign-text-middle roboto-normal-purple-pizzazz-62px">{this.state.globalStats.TotalCases - this.state.globalStats.TotalRecovered - this.state.globalStats.TotalDeaths - this.state.globalStats.Serious_Critical}</h1>
                                                        <h5 class="text-white font-weight-light pb-3 pt-2 text-middle">Deaths:</h5>
                                                        <h1 class="text-dark number valign-text-middle roboto-normal-purple-pizzazz-62px">{this.state.globalStats.TotalDeaths}</h1>
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
                <div className="pt-5"></div>
                <div className="pt-5"></div>
            </div>

        );
    }
}

export default CovidStats;