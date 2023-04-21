const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
const db = path.join(__dirname, '../db/db.json');

const readNotes = () => {
    const notes = fs.readFileSync(db, 'utf8');
    return JSON.parse(notes);
};

const writeNotes = (notes) => {
    fs.writeFileSync(db, JSON.stringify(notes));
};

//Get all notes
router.get('/api/notes', (req, res) => {
    });

//Add new notes
router.post('/api/notes', (req, res) => {
    const notes = readNotes();
    res.json(notes);
    });

//Delete notes
router.delete('/api/notes/:id', (req, res) => {


    });