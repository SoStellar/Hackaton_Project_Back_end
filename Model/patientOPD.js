const mongoose = require('mongoose');

const OpdSchema = new mongoose.Schema({
    client_id: { type: String },
    title: { type: String },
    fname: { type: String },
    lname: { type: String },
    address: { type: String },
    birthdate: { type: String },
    age: { type: Number },
    citizen_id: { type: String },
    personal_sym: [],
    drug_allergy: [],
    surge: [],
})
module.exports = mongoose.model("opds", OpdSchema);