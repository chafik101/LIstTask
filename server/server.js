
const express = require('express');
const mongoose = require('mongoose');
const Task = require('./model/schemaTask');
const bodyParser = require('body-parser');
const cros = require('cors')
const app = express();

app.use(cros())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())



app.get('/task/:date', async (req,res)=>{ 
    try{
        await Task.find({}).then(result=>{
            res.send(result)
        })
    }catch(err){
        console.log(err)
    }
    
})


app.post('/addTask', async (req,res)=>{

    try{
        let newTask = new Task({
            title: req.body.title,
            desc : req.body.desc,
            condition: req.body.condition ,
            date : req.body.date,
            timeStart :  req.body.timeStart ,
            timeEnd :  req.body.timeEnd
    })
    await newTask.save();
    res.send('successful saving')

    }catch(err){
        console.log(err)
    }
   
})



app.delete('/task/delete/:id',async (req,res)=>{
    try{
        await Task.findOneAndDelete({_id:req.params.id})
        res.send('delete one successful')
    }
    catch(err){
        console.log(err)
    }
})


app.put('/task/update/:id',async (req,res)=>{
    try{
        await Task.findOneAndUpdate({_id:req.params.id},
            {
                title: req.body.title,
                desc : req.body.desc,
                condition: req.body.condition ,
                date : req.body.date,
                timeStart :  req.body.timeStart ,
                timeEnd :  req.body.timeEnd
            })
            res.send('update successful')
    }
    catch(err){
        console.log(err);
    }
})



mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1')




app.listen(3000)