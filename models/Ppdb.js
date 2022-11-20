const mongoose = require('mongoose')

const ppdbSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    jenisKelamin: {
        type: String,
        required: true
    },
    wali: {
        type: String,
        required: true
    },
    nilai: {
        type: Number,
        required: true
    },
    asal: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "belum diseleksi"
    },
    tglTerdaftar: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Ppdb', ppdbSchema)