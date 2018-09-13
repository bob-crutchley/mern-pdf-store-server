const express = require('express');
const app = express();
const applicationPort = 3001;
const bodyParser = require('body-parser');

// application config
app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use('/api', require('./src/pdf/service'));

app.listen(applicationPort, () => console.log('PDF Store Service Listening on ' + applicationPort));
