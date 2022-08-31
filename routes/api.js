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

// Adding id to new notes in the database so that index.js fetch can pull the note back up when clicked
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

router.delete('/notes/:id', (req, res) => {

    // Puts selected id in a new var   
    const selectId = req.params.id;
    
    // Removes note with corresponding id, removing it from the database
    for (let i = 0; i < db.length; i++) {
        if (selectId === db[i].id) {
            db.splice(i, 1);
            fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
                if (err) throw err;
            });
        };
    };
    res.end();
});

module.exports = router; 