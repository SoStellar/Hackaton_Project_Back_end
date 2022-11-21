const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    id: { type: String },
    start: { type: Date },
    end: { type: Date },
    title: { type: String },
    description: { type: String },
    allDay: { type: Boolean },
    free: { type: Boolean },
    color: { type: String }
})
module.exports = mongoose.model("appointments", AppointmentSchema);