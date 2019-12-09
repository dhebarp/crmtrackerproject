const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('../mongo')
const LeadsBluePrint = require('../models/leadsSchema');

router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

router.use(bodyParser.json({ extended: false }));


router.get('/', (req, res) => {
res.status(200).json({msg: "LEADS API ENDPOINT"});
});

//need all routes