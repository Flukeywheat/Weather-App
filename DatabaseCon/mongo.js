require("dotenv").config();
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");


class connectAtlas{

    constructor()
    {
        const uri = 'mongodb+srv://admin_Zaen:Rebelt5i@cluster0-lnlwz.mongodb.net/Weather';
        mongoose.connect(uri, {useNewUrlParser: true} ).catch( err => console.log(err));
        

        const Schema = mongoose.Schema;
        const ObjId = Schema.ObjectId;


        const User = new mongoose.Schema({
            id: ObjId,
            userName: String,
            password: String,
            email: String
        });

        console.log(process.env.SEC);
        
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


    findUser()
    {
        console.log("cUser");
        
        
        this.myModel.findOne({userName : "flukeywheat"} , function (err, foundUser){
            if ( err )
            {
                console.log("err");
                
                console.log(err);
            }
            else
            {
                console.log("fnd");
                
                console.log(foundUser);
                
            }
        });

    }


    saveUser(props){

        const newUser = new this.myModel();
        console.log(newUser);
        
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
        console.log(newUser);
        

    }



}




module.exports =  connectAtlas;
