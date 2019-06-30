const express = require("express");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const cors = require('cors');
const bodyParser = require("body-parser");
const mongo = require('./DatabaseCon/mongo');
// const keys = require("./config/keys");

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(cors());










app.get("/", (req, res) =>{

    const tst = {
        name: "Zaen",
        messgage: "This is a test"
    }
    res.send("Thi sis a tst");
    
    
})


app.post("/login", async (req, res) =>{
    const newData = req.body;
    console.log("login");
    
    
    
     authLogin(newData).then( (val) =>{
        res.send(val)
        
    });

    
    
    
});



app.post("/signUp", async (req, res ) =>{
    const newData = req.body;
    
    console.log("signUP");
    

    await Save(newData).then( (val) =>{
        console.log(val);
        
        res.send(val);
    });
    
})

async function authLogin(data)
{
    const auth = new mongo();
    const tmpTSt = await auth.authUser(data);
    
    
    return tmpTSt;
}


async function Save(data)
{
    const auth = new mongo();
    const tmpTSt = await auth.saveUser(data);
    return tmpTSt;
}








app.listen( (process.env.PORT || 5000) , () =>{
    console.log("Server is listening");
    
    


})
