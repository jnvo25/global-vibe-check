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



function Globe() {

    const [places, setPlaces] = useState([]);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [show, setShow] = useState(false);
    const [name, setName] = useState("null");
    const [country, setCountry] = useState("null");
    const [covidStats, setCovidStats] = useState("null");
    const [countryRanking, setCountryRanking] = useState("null");
    const [vaccineStats, setVaccineStats] = useState("null");
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
        console.log(rankings);
        return rankings;
    }

    function handleClick(label) {
        console.log(label.properties.nameascii);
        console.log(label.properties.adm0name);
        var countryName = label.properties.adm0name;
        setShow(true);

        setName(label.properties.nameascii);
        setCountry(countryName);
        
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
            

        fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
            {
                headers: {
                    "x-rapidapi-key": "3fa36d8624msh4bd96cbe38ab83ap16a05djsn3f77b6c7e687",
                    "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
                    "useQueryString": true
                }
            })
            .then(res => res.json())
            .then((res) => {
                if (countryName === 'US') {
                    countryName = 'USA';
                } else if (countryName === 'United Kingdom') {
                    countryName = 'UK';
                } else if (countryName === 'Hong Kong') {
                    countryName = 'China';
                }
                console.log(res[res.indexOf(res.find((obj) => { return obj.Country === countryName; }))]);
                setVaccineStats(res[res.indexOf(res.find((obj) => { return obj.Country === countryName; }))]);
            })
            .catch((e) => console.log(e));

    }

    

    useEffect(() => {
        var data = require('../datasets/places.json');
        setPlaces(data.features);
        console.log(data);

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
                vaccineStats = {vaccineStats} />
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
                labelColor={() => 'rgba(255, 165, 0, 0.75)'}
                labelResolution={2}
                onLabelClick={handleClick}

            />
        </div>
    );
}

export default Globe;