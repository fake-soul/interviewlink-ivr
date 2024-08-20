
const twilio = require('twilio');

// Replace with your Twilio account SID and auth token
const accountSid = '*****************';
const authToken = '********************';

const client = twilio(accountSid, authToken);

// Replace with your Twilio phone number and your personal phone number
const twilioNumber = '***************';
const yourNumber = '*************';

// Replace with the URL of your hosted MP3 file
// const audioUrl = 'https://onedrive.live.com/?authkey=%21AEm9E0JuXEPP2EE&id=6D834994D9580DCB%21245717&cid=6D834994D9580DCB&parId=root&parQt=sharedby&o=OneUp';
const audioUrl = 'https://limerick-pigeon-3126.twil.io/assets/Fara%20interview%20audio%20(1).mp3';
// Replace with your interview link


// client.calls
//     .create({
//         twiml: `
//       <Response>
//         <Gather numDigits="1" action="https://fresh-zebras-act.loca.lt/handle-key" method="POST">
//           <Play>${audioUrl}</Play>
//         </Gather>
//       </Response>
//     `,
//         to: yourNumber,
//         from: twilioNumber
//     })
//     .then(call => console.log(call.sid));

// client.calls
//     .create({
//         twiml: `
//       <Response>
//         <Gather numDigits="1" action="/handle-key" method="POST">
//           <Say>Hello and welcome to our interview scheduling system. We're excited to have you here.
//           Your success is important to us, and we're here to ensure your interview process goes smoothly.
//           Please listen carefully to the following options:
//           Press 1 to schedule a new interview.
//           </Say>
//         </Gather>
//       </Response>
//     `,
//         to: yourNumber,
//         from: twilioNumber
//     })
//     .then(call => console.log(call.sid));


client.calls
    .create({
        twiml: `
      <Response>
        <Gather numDigits="1" action="https://afraid-seas-talk.loca.lt/handle-key" method="POST">
        <Play>${audioUrl}</Play>
        </Gather>
      </Response>
    `,
        to: yourNumber,
        from: twilioNumber
    })
    .then(call => console.log(call.sid));

// You'll need to set up a web server to handle the POST request when a key is pressed
// This is a simple example using Express