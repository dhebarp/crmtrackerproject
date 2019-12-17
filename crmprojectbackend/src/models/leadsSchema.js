const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const leadsSchema = new Schema({
    businessName: { type: String},
    address: { street: String, suburb: String, postCode: String },
    officeTel: String,
    email: String,
    leadContact: { firstName: String, lastName: String }
});

const LeadsBluePrint = mongoose.model('Leads', leadsSchema);

module.exports = LeadsBluePrint;