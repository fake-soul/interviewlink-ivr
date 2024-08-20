// const express = require('express');
// const twilio = require("twilio");
// const app = express();
// app.use(express.urlencoded({ extended: false }));
// const interviewLink = 'interview.com/jsdijs';
//
// app.post('/handle-key', (req, res) => {
//     console.log("webhook called")
//     console.log(req.body)
//     if (req.body.Digits === '1') {
//         const twiml = new twilio.twiml.VoiceResponse();
//         twiml.say(`Your personalized interview link is: ${interviewLink.split('').join(' ')}`);
//         res.type('text/xml');
//         res.send(twiml.toString());
//     } else {
//         const twiml = new twilio.twiml.VoiceResponse();
//         twiml.say('Invalid input. Goodbye.');
//         res.type('text/xml');
//         res.send(twiml.toString());
//     }
// });
//
// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


const express = require('express');
const twilio = require('twilio');

// Replace with your Twilio account SID and auth token
const accountSid = '*****************';
const authToken = '(******************)';

const client = twilio(accountSid, authToken);

const app = express();
app.use(express.urlencoded({ extended: false }));

// Replace with your Twilio phone number
const twilioNumber = '(******************';
const yourNumber = '***************';

// Replace with your interview link
const interviewLink = 'interview.com/abc';

app.post('/handle-key', (req, res) => {
    const twiml = new twilio.twiml.VoiceResponse();

    if (req.body.Digits === '1') {
        // Send SMS
        client.messages
                .create({
                    body: `Here's your personalized interview link: ${interviewLink}`,
                    to: yourNumber,
                    from: twilioNumber
                })
                .then(message => console.log('SMS sent, SID:', message.sid))
                .catch(error => console.error('Error sending SMS:', error));

        twiml.say('An SMS with your personalized interview link has been sent to your phone number.');
    } else {
        twiml.say('Invalid input. No SMS will be sent. Goodbye.');
    }

    res.type('text/xml');
    res.send(twiml.toString());
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});