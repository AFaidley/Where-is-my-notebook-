// Global vars and required packages
const router = require('express').Router();
const fs = require('fs');
// Added package to add ID to notes
const uniqid = require('uniqid');
const db = require('../db/db.json');


// Getting the data for notes when the api is called- GET
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

// Adding id to notes so that we can pull it back up- /api/notes:id
router.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) throw err;
        const addId = req.body;
        addId.id = uniqid();
        db.push(addId);

        fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
            if (err) return err;
        });
    });
    res.end();
});

module.exports = router; 