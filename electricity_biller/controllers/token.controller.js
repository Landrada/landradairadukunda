const express =require('express')
const mongoose=require('mongoose')

var router=express.Router()
const token =mongoose.model('Token')

router.get('/',(req,res)=>{
    token.find()
    .then(tokens=>res.send(tokens).status(200))
    .catch(err=>res.send(err).status(404))
})

router.post('/',(req,res)=>{

    var token = new Token();
    token.tokenVal= generateToken();
    token.date=req.body.date
    token.expiryDate=req.body.expiryDate
    token.active = req.body.active
    
    
    const tokenExist =  Token.exists({ _id: userId })
    if (userExists) token.tokenVal = generateToken()
    .then(token=>res.send(token).status(200))
    .catch(err=>res.send(err).status(404))
})


router.delete('/:id',(req,res)=>{
    token.findByIdAndRemove(req.params.id)
    .then(res.send("it was sucessfully deleted").status(201))
    .catch(err=>res.send(err).status(400))
})

router.get('/:id',(req,res)=>{
    token.find({categoryId :req.params.categoryId})
    .then(tokens=>res.send(tokens).status(201))
    .catch(err=>res.send(err).status(400))
})
router.get('/days/:tknVal',(req,res)=>{
    let today = new Date()
    let foundtkn = token.find({tokenVal : req.params.tknVal})
    let days = foundtkn.expiryDate - today
    .then(days => res.send(days).status(201))
    .catch(err=>res.send(err).status(400))
})

function generateToken(){
   return Math.floor(100000 + Math.random() * 900000)
}

module.exports=router;