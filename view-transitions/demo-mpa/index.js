const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve about.html
app.get('/about', async (req, res) => {
  console.log("Sleeping for 5 seconds");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("Woke up after 5 seconds");
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Route to serve home.html
app.get('/home', async (req, res) => {
  console.log("Sleeping for 5 seconds");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("Woke up after 5 seconds");
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
