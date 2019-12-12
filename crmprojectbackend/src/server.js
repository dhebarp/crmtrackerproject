require('dotenv').config();
const express = require('express');
const leadRoutes = require('./routes/leadsRoutes');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
// const hotelRoutes = require('./routes/hotel.routes');


app.use(bodyParser.json());
app.use(cors());


app.use('/api', leadRoutes); // api is the base and is cumulative ( so next ones will build on /api/blah blah)

const port = process.env.EXPRESS_PORT || 3000;
app.listen(port, () => {
    console.log("port" + port);
});