const express = require('express');
const cors = require('cors');

const { PORT } = require('./src/setup/constants.json');
const errorHandler = require('./src/errorHandler');
const route = require('./src/routes/route.js');

const app = express();

app.use(express.static("Public"));

app.use(express.json());
app.use(cors());

app.use(route);

app.use(errorHandler);


//Listen to port for Server
app.listen(PORT, () => console.log('Server listening on http://localhost:' + PORT + '/'));

//Export Server
module.exports = app;