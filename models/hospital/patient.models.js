import mongoose from "mongoose"


const patientSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true,
  },
  diagnosedWith : {
    type : String,
    required : true
  },
  address : {
    type : String,
    required : true
  },
  age : {
    type : Number,
    required : true
  },
  bloodGroup : {
    type : String , 
    required :true
  },
  gender : {
    type : String ,
    enum : ["Male","Female","Others"],
    required : true
  },
  adimittedIn : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Hospital"
  }
},{timestamps : true})

export const Patient = mongoose.models("Patient",patientSchema)