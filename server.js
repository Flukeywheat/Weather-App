const express = require("express");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const cors = require('cors');
const bodyParser = require("body-parser");
const keys = require("./config/keys");

const app = express();
app.use(cors());



passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
}, async (token, tokenSecret, profile, done) =>{
    console.log(token);
    
}));

app.get("/", (req, res) =>{
    res.send("This is just a test");
    
    // console.log(req);
    
})


// app.get("/", passport.authenticate("google", {
//     scope: ["profile", "email"]
//     }) 
// );



app.listen( (process.env.PORT || 5000) , () =>{
    console.log("Server is listening");
    
})
