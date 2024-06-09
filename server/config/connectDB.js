const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = () => {
    mongoose.connect(
        process.env.MONGO_URL
    ).then(() => {
        console.log(`Connected to MongoDB Database Running on ${mongoose.connection.host}`.bgCyan);
    }).catch(() => {
        console.log("Couldn't connect to the database".bgRed)
    })
}

module.exports = connectDB