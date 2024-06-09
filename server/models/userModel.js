const mongoose = require('mongoose')


// shcema Design
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },

    email: {
        type: String,
        required: [true, 'Email is required and should be unique'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'Dude common Password is a must'],
    },
},
    {
        timestamps: true,
    }

)

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;