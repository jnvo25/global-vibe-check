import React from 'react';


import CovidLevel from '../components/CovidLevel.jsx';
import './CovidGuidelines.css';

function CovidGuidelines() {
    return (
        <div>
            <h2 id="header">COVID-19 Guidelines</h2>
            <CovidLevel
                color="#B56AFF"
                name="Widespread"
                criteria="Over 100 new cases per 100,000 people in the past month"
                travelWarning="“Travelers should avoid all travel to these destinations.”" 
            />
            <CovidLevel
                color="#F90B0B"
                name="Substantial"
                criteria="51-100 new cases per 100,000 people in the past month"
                travelWarning="“Travelers should avoid all nonessential travel to these destinations.”" 
            />
            <CovidLevel
                color="#FF8311"
                name="Moderate"
                criteria="5-50 new cases per 100,000 people in the past month"
                travelWarning="“Travelers at increased risk for severe illness from COVID-19 should avoid all nonessential travel to these destinations.”" 
            />
            <CovidLevel
                color="#F4FF74"
                name="Minimal"
                criteria="0-5 new cases per 100,000 people in the past month"
                travelWarning="“All travelers should wear a mask, stay at least 6 feet/2 meters from people who are not from your travel group, avoid crowds, wash their hands often or use hand sanitizer, and watch their health for signs of illness.”" 
            />
            <br />
            <br />
            <p id="cdc">Information provided from the Center for Disease Control. Learn more at cdc.gov</p>
            <br />
        </div>
    );
}

export default CovidGuidelines;