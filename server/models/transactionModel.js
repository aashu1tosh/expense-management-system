const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({

    userid: {
        type: String,
        required: true,
    },

    amount: {
        type: String,
        required: [true, 'Amount is required']
    },
    type: {
        type: String,
        required: [true, 'Type is required']
    },
    category: {
        type: String,
        required: [true, 'Catergory is required']
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'Explain the Description']
    },
    date: {
        type: String,
        required: [true, 'Date is must']
    },
},
    {
        timestamps: true,
    }

)

const transcationModel = mongoose.model('transactions', transactionSchema);


module.exports = transcationModel;