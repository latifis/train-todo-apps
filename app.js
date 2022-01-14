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

app.get('/create-item', (req,res)=>{
    const item = new Item({
        name:'cocmputer',
        price:2000
    })
    item.save().then(result=>res.send(result)).catch(err=>console.log(err))
})
app.get('/get-items', (req,res)=>{
    
    Item.find().then(result=>res.send(result)).catch(err=>console.log(err))
})
app.get('/get-item', (req,res)=>{
    
    Item.findById('61e125d1cba5e7826b8262e3').then(result=>res.send(result)).catch(err=>console.log(err))
})

app.get('/',(req,res)=>{
    const items = [
        {name: 'mobile phone', price: 1000},
        {name: 'book', price: 30},
        {name: 'computer', price: 2000},
    ]
    res.render('index', {items:items});
})
app.get('/add-item',(req,res)=>{
    res.render('add-item')
})
app.use((req,res)=>{
    res.render('error')
})