const express = require("express");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();



passport.use(new googleStrategy({
    clientID: keys.client_id,
    clientSecret: keys.private_key,
    callbackURL: "http://localhost:3000/auth/google/callback"
}, async (token, tokenSecret, profile, done) =>{
    console.log(token);
    
    await(profile)
}));


app.get("/", passport.authenticate("google", {
    scope: ["profile", "email"]
    }) 
);



app.listen( (process.env.PORT || 3000) , () =>{
    console.log("Server is listening");
    
})
