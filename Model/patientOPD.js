const mongoose = require('mongoose');

const OpdSchema = new mongoose.Schema({
    client_id: { type: String },
    title: { type: String },
    fname: { type: String },
    lname: { type: String },
    address: { type: String },
    birthdate: { type: Date },
    age: { type: Number },
    citizen_id: { type: String },
    personal_sym: [],
    drug_allergy: [],
    surge: [],
    myProfile: { type: String },
})
module.exports = mongoose.model("opds", OpdSchema);