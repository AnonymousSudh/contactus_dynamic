const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");
const hbs = require("hbs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const schema = require("./model/schema");
const { urlencoded } = require("express");

require("./db/conn")

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.set("view engine", 'hbs');


const port = process.env.PORT ||3000;

app.get("/",(req,res) =>{
    res.render("index");
});


app.get("/home",(req,res) =>{
    res.render("home")
})
app.get("/contact", (req,res)=>{
    res.render("contact");
})



app.post("/", async(req,res) =>{

    try {
        
        const data = new schema({
            name : req.body.name,
            email : req.body.email,
            phoneno : req.body.phoneno,
            message : req.body.message

        })
 
        const registered = await data.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(400).send(error);
        
    }
})

app.listen(port ,()=>{
    console.log(`listning to port no ${port}`);
})


