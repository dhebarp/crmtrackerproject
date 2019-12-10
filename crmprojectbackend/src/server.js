require('dotenv').config();
const express = require('express');
const app = express();
const leadRoutes = require('./routes/leadsRoutes');
// const hotelRoutes = require('./routes/hotel.routes');

app.use('/api', leadRoutes); // api is the base and is cumulative ( so next ones will build on /api/blah blah)

const port = process.env.EXPRESS_PORT || 3000;
app.listen(port, () => {
    console.log("port" + port);
});