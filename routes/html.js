// Global vars and required packages
const path = require('path');
const router = require('express').Router();

// This will set home (/) to the index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET route for notes.html page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Catch all route to redirect to homepage- index.html as requested in the ReadMe
// Had to remove catch all as it was causing an error with my code- Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON

// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// export router 
module.exports = router;