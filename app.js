require("dotenv").config();
const express = require("express");
const connectDatabase = require("./database");
const app = express()
app.use(express.json());

connectDatabase()
app.get("/", (req, res)=> {
    res.send("Hello,Welcome to home page.....")
 });

app.post("/blog", (req, res)=> {
    res.status(200).json({
     msg: "Post API hits successfully",
})
})
 
app.listen(process.env.PORT, () => {
    console.log("Hello,Your node js has been started.....");
})

