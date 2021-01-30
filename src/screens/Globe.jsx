import React, {useState, useEffect} from 'react';
import Reactglobe from 'react-globe.gl';

function Globe() {
    const [places, setPlaces] = useState([]);

    useEffect(()=> {
        var data = require('../datasets/places.json');
        setPlaces(data.features);
        console.log(data);

    }, [])

    return (
        <Reactglobe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            labelsData={places}
            labelLat={d => d.properties.latitude}
            labelLng={d => d.properties.longitude}
            labelText={d => d.properties.name}
            labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
            labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
            labelColor={() => 'rgba(255, 165, 0, 0.75)'}
            labelResolution={2}

        />
    );
}

export default Globe;