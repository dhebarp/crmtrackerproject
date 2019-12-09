const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const leadsSchema = new Schema({
    businessName: { type: String, required: true },
    address: [{ street: String, Suburb: String, postCode: Number }],
    phone: Number,
    leadContact: [{ firstName: String, lastName: String }]
});

const LeadsBluePrint = mongoose.model('Leads', leadsSchema);

module.exports = LeadsBluePrint;