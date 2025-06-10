# -CHAT-APPLICATION

COMPANY : CODTECH IT SOLUTIONS

NAME : DAKAMARRI SURESH

INTERN ID : CT04DF2473

DOMAIN : FULL STACK WEB DEVELOPMENT

DURATION : 4 WEEKS

MENTOR : NEELA SANTOSH

DESCRIPTION :

 Real-Time Chat Application Using Socket.IO – Project Description :
 
The Real-Time Chat Application is a modern web-based communication platform that enables users to send and receive messages instantly. This project was developed using Node.js as the backend server, Socket.IO for real-time communication, and HTML/CSS/JavaScript on the frontend. It demonstrates the implementation of WebSockets to facilitate instant data exchange between users without needing to refresh the page. The goal of this project is to help users understand how real-time communication works over the web and how chat systems like WhatsApp Web or Slack operate under the hood.

 Technologies Used:
 
Node.js: A JavaScript runtime used to build the backend server.

Express.js: A lightweight framework for creating the web server and routing.

Socket.IO: A JavaScript library for real-time, bi-directional communication between client and server.

HTML5/CSS3: For creating a user-friendly and responsive frontend layout.

JavaScript (Client-side): Handles the Socket.IO connection and user interaction on the frontend.

How It Works:

When a user visits the application in a web browser, they are connected to the server using Socket.IO. This creates a WebSocket connection between the client and the server. The user can then type a message in the input box and hit the Send button. When they do this, the message is emitted (sent) to the server using the socket.emit() method. The server then receives the message and immediately broadcasts it to all connected clients using io.emit().

This ensures that all users currently using the app will see the new message appear on their screens in real time—without refreshing the page. The frontend uses JavaScript to dynamically update the chat window with the new messages using the DOM.

A basic memory-based message storage was added to temporarily store chat messages. When a new user joins, they receive the previous messages from the server to see the recent chat history. However, since there is no database integration, the messages are not saved permanently and will be lost if the server restarts.

Project Structure:
The project follows a clear folder structure:

chat-app/
├── server.js         --> Node.js + Express + Socket.IO server
├── package.json      --> Project config and dependencies
├── public/
│   ├── index.html    --> Frontend chat interface
│   ├── style.css     --> Styling for the chat interface
│   └── client.js     --> Client-side JavaScript (Socket.IO logic)

Features:

Real-time messaging between multiple users.

Simple and responsive chat UI.

Temporary storage of chat history in memory.

Socket.IO-based bi-directional communication.

Console logs for connection/disconnection events.

Easy-to-understand modular code structure.

OUTPUT:

