require('dotenv').config();
require('./Config/config').connect();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const patientOPD = require('./routes/opdRoutes');
const patientTX = require('./routes/txRoutes');
const appointment = require('./routes/appointRoutes');
const app = express();


app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(cors());
app.use(morgan('tiny'));
// app.use(bodyParser.json());

app.use('/opd', patientOPD);
app.use('/tx', patientTX);
app.use('/appoint', appointment)

app.listen(process.env.PORT, () => {
    console.log('Listening on port 8000');
});