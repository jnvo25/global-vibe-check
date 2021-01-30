import React, {useState, useEffect} from 'react';
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

    function handleClick(label) {
        console.log(label.properties.name);
        setShow(true);
        setName(label.properties.name);
    }
    useEffect(()=> {
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
            <InfographicModal show={show} name={name} setShow={setShow} onHide={() => setShow(false)}/>
            <Reactglobe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                width={windowDimensions.width}
                height={windowDimensions.height}
                labelsData={places}
                labelLat={d => d.properties.latitude}
                labelLng={d => d.properties.longitude}
                labelText={d => d.properties.name}
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