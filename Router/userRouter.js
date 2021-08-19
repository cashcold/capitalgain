const express = require('express')
const Total_TransactionModel = require('../UserModel/total_transactionModel')
const UserDeposit = require('../UserModel/depositModel')
const WithdrawDeposit = require('../UserModel/widthdraw')
const bcrypt = require('bcryptjs')
const mailgun = require('mailgun-js')
const dotEnv = require('dotenv')
const jwt = require('jsonwebtoken')
const async = require('async')
const nodemailer = require("nodemailer");
const crypto = require('crypto')

dotEnv.config()

const Router = express.Router()

Router.post('/register/', async(req,res)=>{

    
    User.findOne({reffer : req.params})
    // reffer program

    const user = await User.findOne({email: req.body.email})
    if(user) return res.status(400).send('Email already Exist')


    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const saveUser = new User({
        full_Name: req.body.full_Name,
        user_Name: req.body.user_Name,
        password: hashPassword,
        email: req.body.email,
        bitcoin: req.body.bitcoin,
        bitcoinCash: req.body.bitcoinCash,
        ethereum: req.body.ethereum,
        ip_address: req.body.ip_address,
        accountBalance: req.body.accountBalance,
        reffer: req.body.reffer,
        activetDeposit: req.body.activetDeposit,
        date: req.body.date
    })

    var mailgun = require('mailgun-js')({apiKey: process.env.API_key, domain: process.env.API_baseURL});
    var data = {
        from: 'PayItForward <payitforwardisnvestmentlimited@gmail.com>',
        to: 'frankainoo@gmail.com',
        subject: 'Hello',
        text: 'Thank you for making Bussiness with us, Have a nice day. Thank You'
    };
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
  

    await saveUser.save()
    res.send("user save")

})



Router.post('/login', async(req,res)=>{
    const user = await User.findOne({email: req.body.email})
    if(!user) {

        return res.status(400).send('Email Do Not Exist')
    } 

    await bcrypt.compare(req.body.password, user.password,(err,isMatch)=>{
        if(!isMatch) return res.status(400).send('Invalid Password ')
        else{
            const payload = {
                 user_id: user._id,
                 full_Name: user.full_Name,
                 user_Name: user.user_Name,
                 email: user.email,
                 password: user.password,
                 bitcoin: user.bitcoin,
                 bitcoinCash: user.bitcoinCash,
                 ethereum: user.ethereum,
                 ip_address: user.ip_address,           
                 date: user.Date,
                 accountBalance: user.accountBalance,
                 activetDeposit: user.activetDeposit,
                 date: user.date
            }
            const token = jwt.sign(payload, process.env.TokenSecret)
            res.header('x-access-token', token)
            return res.status(200).send(token)
        }
    })
})

Router.post('/forgotpassword', async (req,res,next)=>{  
    const userEmail = req.body.email;
    async.waterfall([
       (done)=>{
         crypto.randomBytes(20,(err,buffer)=>{
             let token = buffer.toString('hex');
             done(err, token);
         })
         
       },
       (token, done)=>{
         User.findOne({email: req.body.email},(err,user)=>{
             if(!user){
                 return res.status(400).send('Email Not Found')
             }
             user.restartLinkPassword =  token;
             user.save((err)=>{
                 done(err, token, user)
             })
         })
       },
       (token,user,done)=>{
        var mailgun = require('mailgun-js')({apiKey: process.env.API_key, domain: process.env.API_baseURL});
        var data = {
            from: 'PayItForward <payitforwardinvestmentlimited@gmail.com>',
            to: userEmail,
            subject: 'Password Reset',
            html: ` <h1>Please Follow the link to restart your password </h1>
                <p>${process.env.forgotPasswordLink}/${token}</p>
            `
        };
         mailgun.messages().send(data, function (error, body) {
             if(error){
                 return res.status(400).send(error.message)
             }
            return res.status(200).send('Link sent to Email Address')
       });
 
       },
       
    ])
 
     
 })
    Router.post('/editeProfil', async(req,res)=>{
        const salt = await bcrypt.genSalt(10)
        const editPassword = await bcrypt.hash(req.body.password, salt)

        
        const EditProfit = new User({
            full_Name: req.body.full_Name,
            password: editPassword,
            ethereum: req.body.ethereum,
            bitcoinCash: req.body.bitcoinCash
        })
        
        const user = await User.updateOne({full_Name: req.body.full_Name})
        const userPassword = await User.updateOne({password: EditProfit.password})

        
        

        await EditProfit.save()
    })



 Router.post('/activtypassword/:token', async(req,res)=>{
   
   User.findOne({restartLinkPassword : req.params.token})
   .then(user=>{
       if(!user){
           return res.status(422).json({error:"Invalid token"})
       }
       bcrypt.genSalt(10, function(err, salt) {
           bcrypt.hash(req.body.password, salt, function(err, hash) {
           user.password = hash
           user.restartLinkPassword = undefined
           user.save().then((saveduser)=>{
               res.json({message:"password updated success"})
           })

           });
        });
       
   }).catch(err=>{
       console.log(err)
   })
})

Router.post('/withdrawInfo',async(req,res)=>{
   
    user_id = req.body.id
    const user = await WithdrawDeposit.findOne({user_id: req.body.id})

    if(user){
        const currentDeposit = await WithdrawDeposit.aggregate([
            { $match : { user_id : user_id } },
            {$group: {_id: "$user_id", WithdrawAmount: { $sum: "$accountBalance" },WithdrawAmountlast: { $last: "$accountBalance" }}  },
            
        ])
    res.send(currentDeposit)
    }
    
    
})
Router.post('/depositInfo',async(req,res)=>{
   
    user_id = req.body.id
    const user = await UserDeposit.findOne({user_id: req.body.id})

    if(user){
        const currentDeposit = await UserDeposit.aggregate([
            { $match : { user_id : user_id } },
            {$group: {_id: "$user_id", depositAmount: { $sum: "$depositAmount" },depositAmountlast: { $last: "$depositAmount" }}  },
            
        ])
    res.send(currentDeposit)
    }
    
    
})


Router.post('/checkdate',async(req,res)=>{
   
    user_id = req.body.id
    const user = await UserDeposit.findOne({user_id: req.body.id})

    if(user){
        const currentDeposit = await UserDeposit.aggregate([
            { $match : { user_id : user_id } },
            {$group: {_id: "$user_id",lastDate : { $last: "$createdAt" }}  },
            
        ])
    res.json(currentDeposit)
    }
    
    
})

// Router.post('/checkdate',async(req,res)=>{
   
//     user_id = req.body.id
//     const user = await UserDeposit.findOne({user_id: req.body.id})

//     if(user){
//         const currentDeposit = await UserDeposit.aggregate([
//             { $match : { user_id : user_id } },
//             {$group: {_id: "$user_id",lastDate : { $last: "$createdAt" }}  },
            
//         ])
//     res.json(currentDeposit)
//     }
    
    
// })



Router.post('/deposit', async(req,res)=>{
    
    const UserDepositNow = new UserDeposit({
        user_id: req.body.user_id,
        user_Name: req.body.user_Name,
        full_Name: req.body.full_Name,
        planNow: req.body.planNow,
        depositAmount: Number(req.body.depositAmount),
        walletAddress: req.body.walletAddress,
        email: req.body.email,
        date: req.body.date

    })

    await UserDepositNow.save()
    res.send(".........Waiting for BlockChain confirm to credit your Dashboard")
})

Router.post("/updateAccountBalance/:id", async (req, res) => {
    console.log(req.body.accountBalance)
    const user = await User.findById(req.params.id);
    if (req.body.accountBalance) user.accountBalance = req.body.accountBalance;
    await user.save();
    res.send('Balance update');
});

Router.post('/withdraw/:id', async(req,res)=>{
    console.log(req.body)
    const user = await User.findById(req.params.id);
    if (req.body.zero_accountBalance) user.activetDeposit = req.body.zero_accountBalance;
    await user.save();

    const email = req.body.email;
    const user_Name = req.body.user_Name; 
    const withdrawtAmount = req.body.accountBalance
    const WithdrawNow = new WithdrawDeposit({
    user_id: req.body.user_id,
    user_Name: req.body.user_Name,
    accountBalance: Number(req.body.accountBalance),
    zero_accountBalance: req.body.zero_accountBalance,
    email: req.body.email,
    date: req.body.date,
    bitcoin: req.body.bitcoin,
    bitcoinCash: req.body.bitcoinCash,
    ethereum: req.body.ethereum,
})
await WithdrawNow.save()

const userUpdate = await User.findById(req.params.id);
if(userUpdate){
    
}
const payload = {
    user_id: user._id,
    full_Name: user.full_Name,
    user_Name: user.user_Name,
    email: user.email,
    password: user.password,
    bitcoin: user.bitcoin,
    bitcoinCash: user.bitcoinCash,
    ethereum: user.ethereum,
    ip_address: user.ip_address,           
    date: user.Date,
    accountBalance: user.accountBalance,
    activetDeposit: user.activetDeposit,
    date: user.date
}
const RefreshToken = jwt.sign(payload, process.env.RefreshToken)
res.header('RefreshToken', RefreshToken)

var mailgun = require('mailgun-js')({apiKey: process.env.API_key, domain: process.env.API_baseURL});
var data = {
    from: 'PayItForward <payitforwardisnvestmentlimited@gmail.com>',
    to: email,
    subject: 'Payment',
    text: `Hello ${user_Name } Payment of ${withdrawtAmount} have sent to your Bitcoin Wallert Address`
};
mailgun.messages().send(data, function (error, body) {
    console.log(body);
});

res.send(RefreshToken)
 })

 Router.post('/total_tansaction', async(req,res)=>{
     const saveTotalTransaction = new Total_TransactionModel({
         startDate: req.body.startDate,
         endDate: req.body.endDate
     })
    //  const fromDate = req.body.fromDate
    //  const endDate = req.body.endDate
    //  console.log(fromDate)
    //  console.log(endDate)

    res.send("Total Transaction")
    console.log(saveTotalTransaction)
 })











 Router.post('/sendmessage',(req,res)=>{
   
   
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Please i have sent you $548, Check your Account ',
     from: '+19472105301',
     to: '+233235674386'
   })
  .then(message => console.log(message.sid));

    res.send('Message Sent')
 })
 Router.post('/sendmail', async (req,res)=>{
   
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user:'payitforwardinvestment50@gmail.com', // generated ethereal user
      pass:'VyGh7NbW93jvFTOH', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "payitforwardinvestment50@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Checking new api</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


    res.send('Message Sent')
 })


















































































// Router.post('/widthdraw/:id', async(req,res)=>{
//     console.log(req.body.zero_accountBalance)
//     const user = await User.findById(req.params.id);
//     if (req.body.zero_accountBalance) user.accountBalance = req.body.zero_accountBalance;
//     await user.save();

  
//     res.send('Payment send to Account Wallet')
// })






module.exports = Router;
