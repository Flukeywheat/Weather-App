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
        console.log(tmpObj);
        
        return tmpObj
            
    }
    
    findUserByPar(par, val) // looking in field par // finding by val
    {
        if (par === "userName")
        {
            return this.myModel.countDocuments({'userName' : val } , function (err, count){
                
                if ( err )
                {
                    console.log(err);
                }
            })
        }
        else
        {
            return this.myModel.countDocuments({'email' : val } , function (err, count){
                if ( err )
                {
                   console.log(err); 
                }
            })
        }
    }


    async authUser(userInfo)
    {
        const user = await this.myModel.findOne({'userName' : userInfo.user } , function (err, foundUser){
            if ( !err && foundUser)
            {
                return foundUser;
            }
            else if ( err )
            {
                console.log(err);
                console.log("108");
                
            }
        })

        if ( user != null && userInfo.pass === user.password)
        {   
            return true;
        }
        else
        {
            return false;
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
                let retEmail_User = {
                    userFound : null,
                    emailFound : null
                };
                if ( val.user)
                {
                    retEmail_User.userFound = true;
                }
                if (val.email)
                {
                    retEmail_User.emailFound = true;
                }
                console.log(retEmail_User);
                
                return retEmail_User;
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
        
            
        
        
        return confirm;
        

    }



}




module.exports =  connectAtlas;
