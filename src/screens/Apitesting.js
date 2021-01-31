import react, {useEffect} from 'react';

function AboutUs() {
    useEffect(()=>{
        var location = "Japan";
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://localhost:5001/global-vibe-check/us-central1/sendPhoto?location='+location,
            headers: { }
        };

        axios(config)
            .then(function (response) {
                console.log("RESULT: " + JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])
    return (
        <div>

        </div>
    )
}

export default AboutUs;