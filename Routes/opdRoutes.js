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
        const { client_id, title, fname, lname, address, birthdate, age, citizen_id, tel, personal_sym, drug_allergy, surge, myProfile } = req.body;

        const opdcard = await OPDcard.create({
            client_id,
            title,
            fname,
            lname,
            address,
            birthdate,
            age,
            citizen_id,
            tel,
            personal_sym,
            drug_allergy,
            surge,
            myProfile
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

router.put('/:citizen_id', async (req, res) => {
    const { title, fname, lname, address, birthdate, citizen_id, tel, personal_sym, drug_allergy, surge } = req.body;
    const patientID = req.params.citizen_id;
    const opd = data.find((opd) => opd.citizen_id === patientId);

    opd.title = title;
    opd.fname = fname;
    opd.lname = lname;
    opd.address = address;
    opd.birthdate = birhdate;
    opd.citizen_id = citizen_id;
    opd.tel = tel;
    opd.personal_sym = personal_sym;
    opd.drug_allergy = drug_allergy;
    opd.surge = surge;

    res.json(opd);

});

router.put('/update/:citizen_id', async (req, res) => {
    const patientID = req.params.citizen_id;
    const update = req.query.update;
    const { value } = req.body;
    const data = {
        $set: {
            [update]: value,
        }
    }
    const updateDatabase = await OPDcard.updateOne({ citizen_id: patientID }, data);
    res.sendStatus(200, updateDatabase);
});
router.put('/updateArray/:citizen_id', async (req, res) => {
    const update = req.query.update;
    const patientID = req.params.citizen_id;
    const { value } = req.body;
    const data = {
        $push: {
            [update]: value,
        }
    }
    const updateDatabase = await OPDcard.updateOne({ citizen_id: patientID }, data);
    res.sendStatus(200, updateDatabase);
})

router.put('/deleteArray/:citizen_id', async (req, res) => {
    const update = req.query.update;
    const patientID = req.params.citizen_id;
    const { value } = req.body;
    const data = {
        $pull: {
            [update]: value,
        }
    }
    const updateDatabase = await OPDcard.updateOne({ citizen_id: patientID }, data);
    res.sendStatus(200, updateDatabase);
})

router.delete('/delete/:citizen_id', async (req, res) => {
    const patientId = req.params.citizen_id;
    const result = await OPDcard.find({});
    const Datapatient = await OPDcard.find({ citizen_id: patientId });
    const deletePatient = await OPDcard.deleteOne(Datapatient[0]);
    res.sendStatus(204);
});

module.exports = router;