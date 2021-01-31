const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// SAMPLE CODE FOR FUNCTION ############################################################################################
// const cors = require('cors')({origin: true});
//
// exports.sendEmail = functions.https.onRequest(async (req, res) => {
//     try {
//         cors(req, res, async () => {
//             var data = req.body;
//             const sgMail = require('@sendgrid/mail');
//             sgMail.setApiKey('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');
//             const msg = {
//                 to: 'mojojojovovo@gmail.com',
//                 from: 'info@law-site.com',
//                 template_id: 'd-17318c6f3ed540688dd1f890c705ead3',
//                 dynamic_template_data: {
//                     resp_name: data.name,
//                     resp_email: data.email,
//                     resp_phone: data.phone,
//                     resp_message: data.message
//                 },
//             };
//             await sgMail.send(msg)
//             res.status(200).send();
//         });
//     } catch(error) {
//         res.status(500).send(error);
//     }
// })
// END OF SAMPLE #######################################################################################################
