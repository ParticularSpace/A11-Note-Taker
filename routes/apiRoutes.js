//This is my apiRoutes.js file that services the api requests. 
const router = require('express').Router();
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
const db = path.join(__dirname, '../db/db.json');

// Functions to read and write notes
const readNotes = () => {
    const notes = fs.readFileSync(db, 'utf8');
    return JSON.parse(notes);
};

const writeNotes = (notes) => {
    fs.writeFileSync(db, JSON.stringify(notes));
};

//Get all notes
router.get('/api/notes', (req, res) => {
    const notes = readNotes();
    if (err){
        return res.status(500).json(err);
    }
    res.json(notes);
    });

//Add new notes
router.post('/api/notes', (req, res) => {
    const newNote = { ...req.body, id: uuid.v4() };
    const notes = readNotes();
    notes.push(newNote);
    writeNotes(notes);
    if(err){
        return res.status(500).json(err);
    }
    res.json(notes);
    });

//Delete notes
router.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const notes = readNotes();
    const updateNotes = notes.filter((note) => note.id !== noteId);
    writeNotes(updateNotes);
    if(err){
        return res.status(500).json(err);
    }
    res.json(updateNotes);
    });


module.exports = router;