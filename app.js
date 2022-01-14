const express = require('express');
const mongoose = require('mongoose')
const app = express();
const mongodb = 'mongodb+srv://ckmobile:ckmobile123@cluster0.ljkoi.mongodb.net/item-database?retryWrites=true&w=majority'
mongoose.connect(mongodb).then(()=>
    console.log('connected'))
    .catch(err=> console.log(err)
)

app.set('view engine', 'ejs')
app.listen(3000);

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