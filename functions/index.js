const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

async function call (location, apikey) {
    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'https://api.unsplash.com/search/photos?query=' + location + '&orientation=landscape&client_id=2gcR-F77X5rSxovlG-Y124BBpDAIEIGx14l60BQY5v0',
        headers: {
            'query': location,
            'orientation': 'landscape',
            'client_id': apikey
        }
    };

    const data = await axios(config)
        .then(function (response) {
            return response.data.results[0].urls.small;
        })
        .catch(function (error) {
            console.log("Error in call function: " + error);
        });
    return data;
}

async function run(req, res) {
    const data = await call(req.query.location, req.query.apikey);
    res.send(data);
}

app.get('/', (req, res) => {
    run(req, res);
})

exports.sendPhoto = functions.https.onRequest(app);