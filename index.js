const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware for parsing URL-encoded form data
app.use(express.urlencoded({ extended: false }));

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for users (for simplicity)
let users = {};

// Serve the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the registration form
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// Handle registration form submission
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (users[username]) {
    return res.send('User already exists. <a href="/register">Try again</a>');
  }

  users[username] = password;
  res.send('Registration successful! <a href="/login">Login</a>');
});

// Serve the login form
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (users[username] && users[username] === password) {
    res.send(`Login successful! Welcome, ${username}. <a href="/">Home</a>`);
  } else {
    res.send('Invalid credentials. <a href="/login">Try again</a>');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
