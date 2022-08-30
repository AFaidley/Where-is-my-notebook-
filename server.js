// Global vars and required packages
const express = require('express');
const htmlRoute = require('./api-routes/html');
const apiRoute = require('./api-routes/api');
const PORT = process.env.PORT || 3001;

// Initializing app var by setting it to express()
const app = express();

// Typical middleware used in apps- boilerplate- Also calling api routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/html/', htmlRoute);
app.use('/api/', apiRoute);
app.use(express.static('public'));

// App listening on 3001 port
app.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT} 🎉`)
);