const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

// Middleware
app.use(bodyParser.json())
app.use(cors())

// import routes
const ppdbRoutes = require('./routes/ppdb')
const userRoutes = require('./routes/auth')
const adminRoutes = require('./routes/auth2')

// ruoutes example
app.use('/ppdb', ppdbRoutes)
app.use('/user', userRoutes)
app.use('/admin', adminRoutes)

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect Error!'))
db.once('open', () => {
    console.log('Database is Connected')
})

// listen
app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.PORT}`)
})