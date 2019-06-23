require("dotenv").config();
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");


class connectAtlas{

    constructor()
    {
        const uri = 'mongodb+srv://' + process.env.AtlLog +  "@cluster0-lnlwz.mongodb.net/Weather";
        mongoose.connect(uri, {useNewUrlParser: true} ).catch( err => console.log(err));
        

        const Schema = mongoose.Schema;
        const ObjId = Schema.ObjectId;

     
        const User = new mongoose.Schema({
            id: ObjId,
            userName: String,
            password: String,
            email: String
        });

        
        User.plugin(encrypt, {secret: process.env.SEC , excludeFromEncryption: ['userName', "email"]}); 


        try //  checking for Model Overwrite
        {
            this.myModel = mongoose.model("User");
        }
        catch
        {
            this.myModel = mongoose.model("User", User);
        }

        
    }


    async findUser(user) // find user based on Email or Username
    {   
        const foundUser = await this.findUserByPar("userName" , user.name);
        const foundEmail = await this.findUserByPar("email" , user.nEmail);
           
        

        let tmpObj = {
            found: false
        };

        if ( foundUser )
        {
            tmpObj.user = true;
            tmpObj.found = true;
        } 
        if ( foundEmail )
        {
            tmpObj.email = true;
            tmpObj.found = true;
        }

        return tmpObj
            
    }
    
    findUserByPar(par, val) // looking in field par // finding by val
    {
        if (par === "userName")
        {
            return this.myModel.findOne({'userName' : val } , function (err, foundUser){
                
                
                if ( !err )
                {
                    const truFal = ( foundUser !== null ) ? true : false;
                    
                    return truFal;
                }
                else
                {
                    console.log(err);
                    return null;
                }
            })
        }
        else
        {
            return this.myModel.findOne({'email' : val } , function (err, foundUser){
                if ( !err )
                {
                    const truFal = ( foundUser !== null ) ? true : false;
                    return truFal;
                }
                else
                {
                    console.log(err);
                    return null;
                }
            })
        }
    }





    async saveUser(props){

        const newUser = new this.myModel();
        const nObjAuth = {
            name : props.user,
            nEmail : props.email
        }
       

        const confirm = await this.findUser(nObjAuth).then( (val) =>{
            
            if ( val.found === true)
            {
                let userMessage = "";
                if ( val.user)
                {
                    userMessage += "Username "
                }
                if (val.email)
                {
                    userMessage += "Email "
                }

                userMessage += "Already Taken please enter another";
                return userMessage
            }
            else
            {
                newUser.userName = props.user;
                newUser.password = props.pass;
                newUser.email = props.email;

                newUser.save( (err) =>{

                    if ( err )
                    {
                        console.log(err);
                    }
                    else
                    {
                        console.log("completed");
                    }
                    
                })
                return "Saved New User";
            }
            
        })
        
            
        console.log(confirm + " New test");
        
        
        return confirm;
        

    }



}




module.exports =  connectAtlas;
