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

app.get('/', async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  console.log(posts);

  res.render('index', {
    title: 'Home',
    message: 'Render all posts from the server...',
    posts: posts,
  });
});

app.get('/posts/:id', async (req, res) => {
  const postId = req.params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();

  res.render('post', {
    title: 'Post Details',
    message: 'Render post from the server...',
    post: post,
  });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
