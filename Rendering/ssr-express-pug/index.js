const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// set our default template engine to "ejs"
// which prevents the need for using file extensions
app.set('view engine', 'ejs');

// set views for error and 404 pages
app.set('views', path.join(__dirname, 'views'));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// define a route to render our index view
app.get('/', async (req, res) => {
  // Get list users from json placeholder API
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);

  res.render('index', {
    title: 'Home',
    message: 'Loading data from the server...',
    users: users,
  });
});

// define a route to render user details view
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await response.json();
  console.log(user);

  res.render('user', {
    title: 'User Details',
    message: 'Loading user details from the server...',
    user: user,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
