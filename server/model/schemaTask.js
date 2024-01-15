const mongoose = require('mongoose');



const {Schema} = mongoose
const TaskSchema = new Schema({
    title: String,
    desc : String,
    condition:  { type: Boolean, default: true },
    date : String,
    timeStart : String ,
    timeEnd :String
});

const Task = mongoose.model('task',TaskSchema)

module.exports = Task