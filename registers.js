import mongoose, { model } from "mongoose";
// Schema Creation part
const studentScheme = new mongoose.Schema({
    firstname :{
        type:String,
        require:true
    },
    lastname : {
        type:String,
        require:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                // Use a regular expression to validate the email format
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique:true,
        validate: {
            validator: function (value) {
                // Use a regular expression to validate the phone number format (10 digits)
                return /^\d{10}$/.test(value);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },

    age:{
        type:String,
        require:true
    },

    gender:{
        type:String,
        required:true
    },

    password : {
        type:String,
        required : true
    },


})

// Model creation part
// const Register = new model("Register",studentScheme);
const Register = new model("Register",studentScheme);
//export
export {Register};
