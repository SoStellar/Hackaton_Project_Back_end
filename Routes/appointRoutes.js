const express = require('express');

const router = express.Router();
const Appoint = require('../Model/appointment');

router.get('/', async (req, res) => {
    const result = await Appoint.find({});
    res.send(result);
});

router.post("/", async (req, res) => {
    try {
        const { client_id, appoint_date, do_list } = req.body;
        const appointment = await Appoint.create({
            client_id,
            appoint_date,
            do_list,
        })

        res.status(201).json(appointment);
    } catch (err) {
        console.log(err.message);
    }
});

router.get("/:appoint_date", async (req, res) => {
    const date = req.params.appointment;
    const result = await Appoint.find({});
    const appoint = result.find((appoint) => appoint.appoint_date == date);
    res.json(appoint);
});
router.delete('/delete/:appoint_date', async (req, res) => {
    const date = req.params.appoint_date;
    const result = await Appoint.find({});
    const Dataappoint = await Appoint.find({ appoint_date: date });
    const deleteAppoint = await Appoint.deleteOne(Dataappoint[0]);
    res.sendStatus(204);
})
module.exports = router;