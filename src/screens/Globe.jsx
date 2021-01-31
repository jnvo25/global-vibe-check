import React, { useState, useEffect } from 'react';
import Reactglobe from 'react-globe.gl';

import InfographicModal from "./GlobePage/InfographicModal";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const vaccovidHeader = {
    "x-rapidapi-key": window.env.RAPID_API_KEY,
    "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    "useQueryString": true
}

function Globe() {
    const [vacApiData, setVacApiData] = useState("null");
    const [places, setPlaces] = useState([]);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [show, setShow] = useState(false);
    const [name, setName] = useState("null");
    const [country, setCountry] = useState("null");
    const [covidStats, setCovidStats] = useState("null");
    const [countryRanking, setCountryRanking] = useState("null");
    const [vacStats, setVacStats] = useState("null");
    const [isLoading, setLoading] = useState(false);
    const [cdcUrl, setCdcUrl] = useState("null");
    const [imageURL, setImage] = useState("https://unsplash.com/photos/EOAzJZPzxIk");

    var covidRankings = null;

    function getCovidRankings(data) {
        var rankings = []
        for (var country in data) {
            rankings.push(country);
        }
        rankings.sort(function (c1, c2) {
            const c1ActiveCases = data[c1]['All']['confirmed'] - data[c1]['All']['recovered'] - data[c1]['All']['deaths'];
            const c2ActiveCases = data[c2]['All']['confirmed'] - data[c2]['All']['recovered'] - data[c2]['All']['deaths'];
            return (c2ActiveCases / data[c2]['All']['population']) - (c1ActiveCases / data[c1]['All']['population']);
        });
        return rankings;
    }

    function handleClick(label) {
        setLoading(true);
        console.log(label.properties.nameascii);
        console.log(label.properties.adm0name);
        var countryName = label.properties.adm0name;
        setShow(true);

        setName(label.properties.nameascii);
        setCountry(countryName);
        setCdcUrl(label.properties.cdc_link);
        
        
        // Get COVID rankings by country
        fetch('https://covid-api.mmediagroup.fr/v1/cases')
            .then(res => res.json())
            .then((res) => {
                if (countryName === 'United States of America') {
                    countryName = 'US';
                }
                setCovidStats(res[countryName]['All']);
                if (covidRankings === null) {
                    covidRankings = getCovidRankings(res);
                }
                setCountryRanking(covidRankings.indexOf(countryName) + 1);
            })
            .catch((e) => console.log(e));

        // Get COVID statistics for each country: new cases, active cases, etc
        fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
            {
                headers: vaccovidHeader
            })
            .then(res => res.json())
            .then((res) => {
                countryName = countryCorrection(countryName);
                setVacStats(res[(res.findIndex((obj) => { return obj.Country === countryName; }))]);
                
                setLoading(false);
            })
            .catch((e) => console.log(e));



        var config = {
            method: 'get',
            // url: 'http://localhost:5001/global-vibe-check/us-central1/sendPhoto?location=' +label.properties.nameascii + '&apikey=' + process.env.US_API_KEY,
            url: 'https://us-central1-global-vibe-check.cloudfunctions.net/sendPhoto?location='+label.properties.nameascii+ '&apikey=' + process.env.US_API_KEY,
            headers: { }
        };

        require('axios')(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setImage(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        setLoading(false);
    }

    function colorByRisk(risk) {
        if (risk >= 0.5) {
            return "rgba(200, 0, 255, 0.75)";
        } else if (risk >= 0.15) {
            return "rgba(255, 0, 0, 0.75)";
        } else if (risk >= 0.05) {
            return "rgba(255, 165, 0, 0.75)";
        } else {
            return "rgba(255, 230, 0, 0.75)";
        }
    }

    function countryCorrection(country) {
        if (country === 'Vatican (Holy See)') {
            return 'Vatican City';
        } else if (country === 'Swaziland') {
            return 'South Africa';
        } else if (country === 'United States of America' || country === 'US') {
            return 'USA';
        } else if (country === 'United Kingdom') {
            return 'UK';
        } else if (country === 'Czech Republic') {
            return 'Czechia';
        } else if (country === 'Macedonia') {
            return 'North Macedonia';
        } else if (country === 'South Korea') {
            return 'S. Korea';
        } else if (country === 'United Arab Emirates') {
            return 'UAE';
        } else if (country === 'Macedonia') {
            return 'North Macedonia';
        } else if (country === 'Kosovo') {
            return 'Albania';
        }
        return country;
    }

    function getColor(dataPoint) {
        var country = dataPoint.properties.adm0name;
         country = countryCorrection(country);
        var infectionRisk = vacApiData[(Array.from(vacApiData).findIndex((obj) => { return obj.Country === country; }))];
        if (infectionRisk === undefined) {
            // gray means not in dataset
            return "rgba(200, 200, 200, 0.75)";
        } 
        infectionRisk = infectionRisk['Infection_Risk'];
        return colorByRisk(infectionRisk);
    }

    useEffect(() => {
        var data = require('../datasets/places.json');
        setPlaces(data.features);
        console.log(data);

        fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
            {
                headers: {
                    "x-rapidapi-key": window.env.RAPID_API_KEY,
                    "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
                    "useQueryString": true
                }
            })
            .then(res => res.json())
            .then((res) => setVacApiData(Array.from(res)))
            .catch((e) => console.log(e));


        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [])



    return (
        <div>
            <InfographicModal
                show={show}
                name={name}
                country={country}
                setShow={setShow}
                onHide={() => setShow(false)}
                covidStats={covidStats}
                countryRanking={countryRanking}
                vacStats={vacStats}
                isLoading = {isLoading}
                cdcUrl = {cdcUrl}
                imageURL = {imageURL}
            />
            <Reactglobe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                width={windowDimensions.width}
                height={windowDimensions.height}
                labelsData={places}
                labelLat={d => d.properties.latitude}
                labelLng={d => d.properties.longitude}
                labelText={d => d.properties.nameascii}
                labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
                labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
                labelColor={d => getColor(d)}
                labelResolution={2}
                onLabelClick={handleClick}

            />
        </div>
    );
}

export default Globe;