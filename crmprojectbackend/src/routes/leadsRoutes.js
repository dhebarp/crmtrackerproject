const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('../mongo');
const seeData = require('../data/readFile');
const LeadsBluePrint = require('../models/leadsSchema');

router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

router.use(bodyParser.json({ extended: false }));


router.get('/', (req, res) => {
res.status(200).json({msg: "LEADS API ENDPOINT"});
});

// reset route. 

const sd = new seeData.SeeData();

router.get('/reset', async (req,res) => {
     await LeadsBluePrint.deleteMany({});
     await LeadsBluePrint.create(sd.dbObjs)
     .catch(e => console.log(e));

res.status(200).json(sd.dbObjs);
});

router.get('/allleads', async(req, res) => {
    await LeadsBluePrint.find((err, allData)=>{
        res.send(allData);
    })
});


router.post('/newlead', async (req, res) => {
    try {
        const newLead = new LeadsBluePrint(req.body);
        await newLead.save();
        res.status(200).json(req.body);   
    }
    catch (e) {
        res.status(204).json({msg: "no content"});
    }
});

router.delete('/lead/remove/:id', async (req,res)=> {
    try {
        await LeadsBluePrint.findByIdAndDelete(req.params.id);
        res.status(200).json({msg: 'Removed: ' + req.params.id});
    }
    catch (e) {
        res.status(204).json({msg: 'no content'});
    }
});

router.put('/lead/update/:id', async (req, res) => {
    try {
        await LeadsBluePrint.findByIdAndUpdate((req.params.id), req.body, {new: true} );
        res.status(200).json(req.params.id);
    }
    catch (e) {
        res.status(204).json({msg: 'no content'});
    }
});

router.get('/lead/find/:id', async (req,res) =>{
    console.log("ID TEXT: " , req.params.id)
    const businessName = await LeadsBluePrint.findById(req.params.id);
    console.log(businessName);
        res.send(businessName);
});

router.get('/lead/search/:businessname', async (req,res) =>{
    const businessName = await LeadsBluePrint.find({businessName: req.params.businessname});
        res.send(businessName);
});


module.exports = router;