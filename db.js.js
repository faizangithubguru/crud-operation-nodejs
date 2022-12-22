
const mongoose = require("mongoose");

const mongoosee = ()=>{
  try {
    mongoose.connect("mongodb://localhost:27017/product");
   
    console.log('Successfullly connected to database');
    
  } catch (error) {
    console.log('mongoose failed',error);
  }
    

}

module.exports=mongoosee();

  
 