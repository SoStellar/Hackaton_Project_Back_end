const mongoose = require('mongoose');

const TxSchema = new mongoose.Schema({
    cure_date: { type: String },
    client_id: { type: String },
    diagnose: [],
    treat: [],
    teeth_po: [],
    xray_film: [],
})
module.exports = mongoose.model("txes", TxSchema);