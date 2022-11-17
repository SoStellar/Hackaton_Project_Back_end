const express = require('express');

const router = express.Router();
const TXcard = require('../Model/patientTX');

router.get('/', async (req, res) => {
    const result = await TXcard.find({});
    res.send(result);
});

router.post("/", async (req, res) => {
    try {
        const { cure_date, client_id, diagnose, treat, teeth_po, xray_film } = req.body;
        const txcard = await TXcard.create({
            cure_date,
            client_id,
            diagnose,
            treat,
            teeth_po,
            xray_film,
        })

        res.status(201).json(txcard);
    } catch (err) {
        console.log(err.message);
    }
});

router.get("/:client_id", async (req, res) => {
    const patientID = req.params.client_id;
    const result = await TXcard.find({});
    const txcard = result.find((txcard) => txcard.client_id == patientID);
    res.json(txcard);
});
router.delete('/delete/:client_id', async (req, res) => {
    const patientId = req.params.client_id;
    const result = await TXcard.find({});
    const Datapatient = await TXcard.find({ client_id: patientId });
    const deletePatient = await TXcard.deleteOne(Datapatient[0]);
    res.sendStatus(204);
})
module.exports = router;