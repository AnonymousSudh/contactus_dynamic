const  mongoose  = require("mongoose");
const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    message: {
        type:String

    }


})

// creating a new collection
const Contactus = new mongoose.model("Contactus", contactSchema);

// export model to another file
module.exports = Contactus;