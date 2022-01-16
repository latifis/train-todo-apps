const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/items');
const app = express();
const mongodb = 'mongodb+srv://ckmobile:ckmobile123@cluster0.ljkoi.mongodb.net/item-database?retryWrites=true&w=majority'
mongoose.connect(mongodb).then(()=>
    console.log('connected'))
    .catch(err=> console.log(err)
)

app.set('view engine', 'ejs')
app.listen(3000);

app.get('/',(req,res)=>{
    res.redirect('/get-items');
})
app.get('/get-items', (req,res)=>{
    Item.find().then(result=>{
        res.render('index', {items:result});
    }).catch(err=>console.log(err))
})
app.get('/add-item',(req,res)=>{
    res.render('add-item')
})
app.use((req,res)=>{
    res.render('error')
})