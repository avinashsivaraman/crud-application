const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const path = require('path');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'ui/notes', 'build')));

MongoClient.connect(db.url, (err, database) => {
  if (err)
    return console.log(err)
  require('./app/routes')(app, database);
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});
