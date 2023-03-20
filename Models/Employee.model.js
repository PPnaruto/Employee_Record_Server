const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
});

const Employee = mongoose.model("Record",EmployeeSchema);

module.exports = Employee;