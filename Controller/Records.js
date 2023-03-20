
const Employee = require('../Models/Employee.model');

const getData = async (req,res)=>{
    try{
        const Employee_data = await Employee.find();

        res.send({
            data:Employee_data
        })
    }catch(err){
        console.error(err.message);
    }
}

const postData = async (req,res)=>{
    try{
        const data = req.body;
        const Employee_data =await Employee.create(data);

        res.send({
            data:Employee_data
        })
    }catch(err){
        console.error(err.message);
    }
}

const updataData = async (req,res)=>{
    try{
        const data = req.body;
        const id = req.params.id;
        const Employee_data = await Employee.findByIdAndUpdate(id,data,{new:true});
      
        res.send({
            data:Employee_data
        })
    }catch(err){
        console.error(err.message);
    }
}

const deleteData = async (req,res)=>{
    try{
        const id = req.params.id;
        const Employee_data = await Employee.findByIdAndDelete(id);
      
        res.send({
            data:Employee_data
        })
    }catch(err){
        console.error(err.message);
    }
}

module.exports = {
    getData,
    postData,
    updataData,
    deleteData
}