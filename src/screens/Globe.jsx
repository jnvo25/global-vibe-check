import React from 'react';
import Reactglobe from 'react-globe.gl';

function Globe() {
    return (
        <Reactglobe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        />
    );
}

export default Globe;