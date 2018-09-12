const express = require('express');
const app = express();
const applicationPort = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const pdfRoutes = require('./src/routes/pdfRoutes');
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', pdfRoutes);
// app.get('/', (req, res) => res.send('hello from express server'));

app.listen(applicationPort, () => console.log('PDF Store Server Listening on ' + applicationPort));
