import express from 'express';
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

 //Chat Room
 const WebSocket = require('ws');

 const wss = new WebSocket.Server({ port: 8080 });
 wss.on('connection', (ws) => {
   console.log('Client connected');

   ws.on('message', function (message) {
       wss.clients.forEach((client) => {
         if (client !== ws && client.readyState === WebSocket.OPEN) {
           client.send(message);

         }
       });
     });
 });
 const chatContainer = document.getElementById('chat-container');
 const messageInput = document.getElementById('message-input');
// const sendBtn = document.getElementById('send-btn');

// const socket = new WebSocket('ws://your-server-url');

// socket.onopen = () => {
//   console.log('Connected to WebSocket server');
// };

// socket.onmessage = (event) => {
//   const message = JSON.parse(event.data);   

//   const messageDiv = document.createElement('div');
//   messageDiv.textContent = message;
//   chatContainer.appendChild(messageDiv);
// };

// sendBtn.addEventListener('click', () => {
//   const message = messageInput.value;
//   socket.send(JSON.stringify(message));
//    messageInput.value = '';
//  });

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});