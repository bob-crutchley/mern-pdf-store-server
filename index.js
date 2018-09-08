const express = require('express');
const app = express();
const applicationPort = 3001;
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => res.send('hello from express server'));

app.listen(applicationPort, () => console.log('PDF Store Server Listening on ' + applicationPort));

