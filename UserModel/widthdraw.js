const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        require: true,
    },
    user_Name: { 
        type: String,
    },
    full_Name: { 
        type: String,
    },
    accountBalance: {
       
    }, 
    activetDeposit: {
      
    }, 
    zero_accountBalance: {
      
    }, 
    email: {
        type: String,
        require: true,
    },
    bitcoin: {
        type: String,
    },
    date:{
        type: String,
        require: true,
    }


    
})

const WithdrawDeposit = mongoose.model('WithdrawDeposit', userSchema)

module.exports = WithdrawDeposit;