const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: false,
    },
    email: {
        type: String,
        require: false,
    },
    password: {
        type: String,
        require: false,
    },
    city: {
        type: String,
        require: false,
    },
    phone: {
        type: String,
        require: false,
    },
    image: {
        type: String,
        require: false,
    },
})

const tblname = mongoose.model('admin_user', userSchema);
module.exports = tblname