const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

const schema = require("./model/schema")

require("./db/conn")

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.set("view engine", 'hbs');


const port = process.env.PORT ||3000||8000;

app.get("/",(req,res) =>{
    res.render("index");
});
app.get("/home",(req,res) =>{
    res.render("home")
})
app.get("/contact", (req,res)=>{
    res.render("contact");
})

app.listen(port ,()=>{
    console.log(`listning to port no ${port}`);
})


