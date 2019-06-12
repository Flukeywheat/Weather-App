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








// passport.use(new googleStrategy({
//     clientID: keys.googleClientID,
//     clientSecret: keys.googleClientSecret,
//     callbackURL: "http://localhost:3000/auth/google/callback"
// }, async (token, tokenSecret, profile, done) =>{
//     console.log(token);
    
// }));

app.get("/", (req, res) =>{

    const tst = {
        name: "Zaen",
        messgage: "This is a test"
    }
    res.send("Thi sis a tst");
    
    // console.log(req);
    
})


app.post("/", (req, res) =>{
    res.send("Message sent");
    const newData = req.body;
    console.log(newData);
    
    
})

// app.get("/", passport.authenticate("google", {
//     scope: ["profile", "email"]
//     }) 
// );



app.listen( (process.env.PORT || 5000) , () =>{
    console.log("Server is listening");
    
    tst = new mongo();
    tmpObj = {
        userName: "Zaen",
        passWord: "asoidjngfaosijdnv",
        email: "asdkjfn@yaho.com"
    }
    tst.accessUser(tmpObj);


})
