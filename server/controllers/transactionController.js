const transcationModel = require('../models/transactionModel')

const getAllTransaction = async (req, res) => {
    try {
        
        const transactions = await transcationModel.find({
            id: req.body.userid
        });
        res.status(200).json(transactions);
        res.status(200).json({
            sucuess: true,
            transactions,
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            sucuess: false,
            error,
        })
    }

};

const addTransaction = async (req, res) => {
    try {
        console.log("Add transaction called")
        const newTransaction = new transcationModel(req.body);
        await newTransaction.save();
        res.status(200).json({
            success: true,
            newTransaction
        })
    } catch (error) {
        res.status(400).json({
            sucuess: false,
            error
        })
    }
};

module.exports = {getAllTransaction, addTransaction}