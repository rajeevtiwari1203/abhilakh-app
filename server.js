const express = require('express');
const path = require('path');
const app = express();

const homeRouter = require('./api/home');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Serve static files....
app.use(express.static(__dirname + '/dist/'));

// Send all requests to index.html

app.use('/api/home', homeRouter);
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