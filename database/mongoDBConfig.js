const mongoose = require('mongoose')

const config = async() => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Database connected')
    })
    .catch((err) => {
        console.log('connection failed')
        console.log(err)
    })
}

module.exports = config