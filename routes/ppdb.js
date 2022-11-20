const express = require('express')
const router = express.Router()
const Ppdb = require('../models/Ppdb')

const verifyAdmin = require('./verifyAdmin')
const verifyToken = require('./verifyToken')


// CREATE
router.post('/',verifyToken, async (req, res) => {
    const ppdbPost = new Ppdb({
        nama: req.body.nama,
        alamat: req.body.alamat,
        jenisKelamin: req.body.jenisKelamin,
        wali: req.body.wali,
        nilai: req.body.nilai,
        asal: req.body.asal
    })

    try {
        const ppdb = await ppdbPost.save()
        res.json(ppdb)
    }catch(err){
        res.json({message: err})
    }
})

// READ
router.get('/', async (req, res) => {
    try {
        const ppdb  = await Ppdb.find()
        res.json(ppdb)
    }catch(err){
        res.json({message: err})
    }
})

// UPDATE
router.put('/:ppdbId',verifyAdmin, async (req, res) => {
    try{
        const ppdbUpdate = await Ppdb.updateOne({_id: req.params.ppdbId}, {
            nama: req.body.nama,
            alamat: req.body.alamat
        })
        res.json(ppdbUpdate)
    }catch(err){
        res.json({message: err})
    }
})

// DELETE
router.delete('/:ppdbId',verifyAdmin, async (req, res) => {
    try{
        const ppdbUpdate = await Ppdb.deleteOne({_id: req.params.ppdbId})
        res.json(ppdbUpdate)
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router