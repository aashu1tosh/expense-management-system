const express = require('express');
const {
    
} = require('../controllers/userController');
const { addTransaction, getAllTransaction } = require('../controllers/transactionController');
// Router
const router = express.Router()

//add transaction
router.post('/add-transaction', addTransaction)

//get transaction
router.post('/get-transaction', getAllTransaction)


module.exports = router;
