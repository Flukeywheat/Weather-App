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


    async findUser(user) // find user based on Email of Username
    {   
        const foundUser = await this.findUserByPar("userName" , user.name);
        const foundEmail = await this.findUserByPar("email" , user.nEmail);
           
        console.log(foundUser + foundEmail + 'tst');
        

        if ( foundUser || foundEmail )
        {
            return true;
        }
        else
        {
            return false;
        }   
        


            
            
    }
    
    findUserByPar(par, val) // looking in field par // finding by val
    {
        if (par === "userName")
        {
            return this.myModel.findOne({'userName' : val } , function (err, foundUser){
                
                
                if ( !err )
                {
                    const truFal = ( foundUser !== null ) ? true : false;
                    console.log(truFal +  " true");
                    
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
                    console.log(truFal +  " true");
                    
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

    saveUser(props){

        const newUser = new this.myModel();
        const nObjAuth = {
            name : props.user,
            nEmail : props.email
        }
       

        this.findUser(nObjAuth).then( (val) =>{
            console.log(val + "this is a test");
            
            if ( val === true)
            {
                console.log("User Name Already Taken");
                
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
                    
            }
            
        })
        
            
        
        
        
        

    }



}




module.exports =  connectAtlas;
