const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const defaultPort = 3000;

// Get port from command-line argument or environment variable
const port = process.argv[2] || defaultPort;

// Middleware for parsing URL-encoded form data
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// serve everything lol
app.use(express.static(__dirname));

// In-memory storage for users (for simplicity)
let users = {"bob":"1234"};

// Handle registration form submission
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (users[username]) {
    return res.send('User already exists. <a href="/signup.html">Try again</a>');
  }

  users[username] = password;
  console.log(`${username} registered with password ${password}`)
  res.send('Registration successful! <a href="/login.html">Login</a>');
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (users[username] && users[username] === password) {
    res.cookie('username', username, { httpOnly: true });
    res.cookie('localusername', username);
    res.redirect("index.html")
  }else {
    res.send('Invalid credentials. <a href="login.html">Try again</a>');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Handle registration form submission
app.post('/logout', (req, res) => {
  res.cookie('localusername', '');
  if (req.cookies.loggedin) {
    res.cookie('username', "", { httpOnly: true });
  }
  res.redirect("index.html")
});