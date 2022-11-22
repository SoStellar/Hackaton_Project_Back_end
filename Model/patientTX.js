const mongoose = require('mongoose');

const TxSchema = new mongoose.Schema({
    cure_date: { type: Date },
    client_id: { type: String },
    diagnose: [],
    treat: [],
    teeth_po: [],
    comment: { type: String },
    xray_film: [],
})
module.exports = mongoose.model("txes", TxSchema);