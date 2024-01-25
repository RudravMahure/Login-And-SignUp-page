import mongoose from "mongoose";

// Connection with database
mongoose.connect("mongodb://127.0.0.1:27017/exampleRegistration")
.then(()=>console.log("Connection successful"))
.catch((err)=>console.log("Connection error: ",err));


