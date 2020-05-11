let mongoose = require('mongoose');

const server = '127.0.0.1:27017'
const database = 'acme'
const user = 'myAdminUser'
const password = 'password'

// mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`, { useNewUrlParser: true })
mongoose.connect(`mongodb://${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)