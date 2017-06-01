const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const passport = require('passport');
const db = require('./config/db');
const path = require('path');
const app = express();
const port = 8000;

require('./app/models').connect(db.url);


//Tutorial extended is false
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());

const localSignupStrategy = require('./app/passport/local-signup');
const localLoginStrategy = require('./app/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

const authCheckMiddleware = require('./app/middleware/auth-check');
app.use('/api', authCheckMiddleware);

const authRoutes = require('./app/routes/auth');
const apiRoutes = require('./app/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

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
