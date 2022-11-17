require('dotenv').config();
require('./Config/config').connect();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const patientOPD = require('./Routes/opdRoutes');
const patientTX = require('./Routes/txRoutes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('tiny'));
// app.use(bodyParser.json());

app.use('/opd', patientOPD);
app.use('/tx', patientTX);

app.listen(8000, () => {
    console.log('Listening on port 8000');
});