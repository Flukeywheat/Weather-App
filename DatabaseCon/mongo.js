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

        
        User.plugin(encrypt, {secret: process.env.SEC , excludeFromEncryption: ['userName']}); 


        try //  checking for Model Overwrite
        {
            this.myModel = mongoose.model("User");
        }
        catch
        {
            this.myModel = mongoose.model("User", User);
        }

        
    }


    findUser(name)
    {   
            
            return this.myModel.findOne({userName : name} , function (err, foundUser){
                
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
    


    saveUser(props){

        const newUser = new this.myModel();
        
        this.findUser(props.user).then( (val) =>{
            if ( val !== null)
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
