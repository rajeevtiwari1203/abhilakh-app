const express = require('express');
const path = require('path');
const app = express();
const {
  Client
} = require('pg');


const homeRouter = require('./api/home');
const aboutRouter = require('./api/about');
const contactRouter = require('./api/contact');
const gallaryRouter = require('./api/gallary');

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
// Serve static files....
app.use(express.static(__dirname + '/dist/'));

// Send all requests to index.html
app.use(function(req, res, next) {
  req.Client = getClient();
  next();
});

app.use('/api/home', homeRouter);
app.use('/api/about', aboutRouter);
app.use('/api/contact', contactRouter);
app.use('/api/gallary', gallaryRouter);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;//req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error: '+ err.message);
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);

function getClient() {
  var client = new Client({
      user: "uxbwvtetijjubp",
      password: "0e69667b1b89e66fb28669958ad522bce8c4c69b6f34a85ed35389e18d61375b",
      database: "d2bgm6kfd6gui7",
      port: 5432,
      host: "ec2-18-211-48-247.compute-1.amazonaws.com",
      ssl: true
  });
  return client;
}
