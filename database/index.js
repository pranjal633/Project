require("dotenv").config();
const mongoose = require("mongoose")

async function connectDatabase(){
   await mongoose.connect(process.env.MONGOBD_URL);
    console.log("Your Database process is connected successfully");
}

module.exports = connectDatabase