const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const defaultPort = 3000;

// Get port from command-line argument or environment variable
const port = process.argv[2] || defaultPort;

// boilerplate
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// serve everything lol
app.use(express.static(__dirname));

class event{
  constructor(name,location,date,description){
    this.name = name;
    this.location = location;
    this.date = date;
    this.description = description;
  }
}
// In-memory storage for users (for simplicity)
let users = {"bob":"1234","e":"1"};
let events = [new event("Planting Trees for the Future", "somewhere", "date"
, "Join our tree-planting initiative to help make our planet greener."),
new event("Creating Art for A Cause", "location", "MM/DD/YYYY", "Description"),
new event("Beach Cleanup; Day","location","MM/DD?YYYY","Description")]

// Handle registration form submission
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (users[username]) {
    return res.send('User already exists. <a href="/signup.html">Try again</a>');
  }

  users[username] = password;
  console.log(`"${username}" registered with password "${password}".`)
  res.send('Registration successful! <a href="/login.html">Login</a>');
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (users[username] && users[username] === password) {
    res.cookie('username', username, { httpOnly: true });
    res.cookie('localusername', username);
    console.log(`"${username}" signed in.`)
    res.redirect("index.html")
  }else {
    res.send('Invalid credentials. <a href="login.html">Try again</a>');
  }
});

app.get('/events.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'events.html'));
});

// Handle event form submission
app.post('/createevent', (req, res) => {
  const { name,location,date,description } = req.body;

  if (req.cookies.username) {
    events.push(new event(name,location,date,description))
    res.redirect("index.html")
    console.log(`"${req.cookies.username}" created ${name}
    ${location}
    ${date}
    ${description}`)
  }else {
    res.send('Invalid credentials. <a href="login.html">Try again</a>');
  }
});

app.get('/eventinfo', (req, res) => {
  res.json({"data":events});
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Handle registration form submission
app.post('/logout', (req, res) => {
  console.log(`${req.cookies.localusername} logged out.`)
  if (req.cookies.localusername) {
    res.cookie('username', "", { httpOnly: true });
    res.cookie('localusername', '');
  }
  res.redirect("index.html")
});