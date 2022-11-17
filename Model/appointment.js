const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    client_id: { type: String },
    appoint_date: { type: Date },
    do_list: []
})
module.exports = mongoose.model("appointments", AppointmentSchema);