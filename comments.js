// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [];
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send(comment);
});

app.listen(port, () => {
  console.log(`Comments server listening at http://localhost:${port}`);
});