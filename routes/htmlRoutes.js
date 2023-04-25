//Attempted to use best practice for seprating routes out into their own files. Here is my htmlRoutes.js file.


const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});


module.exports = router;