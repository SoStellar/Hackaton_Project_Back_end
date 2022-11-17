const express = require('express');

const router = express.Router();
const OPDcard = require('../Model/patientOPD');

const data = router.get('/', async (req, res) => {
    const result = await OPDcard.find({});
    res.send(result);
});

router.get('/', async (req, res) => {
    const result = await OPDcard.find({});
    res.send(result);
});

router.post("/", async (req, res) => {
    try {
        const { client_id, title, fname, lname, address, birthdate, age, citizen_id, personal_sym, drug_allergy, surge } = req.body;

        const opdcard = await OPDcard.create({
            client_id,
            title,
            fname,
            lname,
            address,
            birthdate,
            age,
            citizen_id,
            personal_sym,
            drug_allergy,
            surge
        })

        res.status(201).json(opdcard);
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/:citizen_id', async (req, res) => {
    const patientID = req.params.citizen_id;
    const result = await OPDcard.find({});
    const opdcard = result.find((opdcard) => opdcard.citizen_id == patientID);
    res.json(opdcard);
});

router.put('/update/:citizen_id', async (req, res) => {
    const
});

router.delete('/delete/:citizen_id', async (req, res) => {
    const patientId = req.params.citizen_id;
    const result = await OPDcard.find({});
    const Datapatient = await OPDcard.find({ citizen_id: patientId });
    const deletePatient = await OPDcard.deleteOne(Datapatient[0]);
    res.sendStatus(204);
});
module.exports = router;