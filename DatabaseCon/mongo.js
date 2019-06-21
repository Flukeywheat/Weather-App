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


    findUser(name)
    {
        return new Promise( (resolve, reject) =>{
            console.log(resolve);
            console.log(reject);
            
            
            this.myModel.findOne({userName : name} , function (err, foundUser){
                if ( !err )
                {
                    tstTru = ( foundUser ) ? true : false;
                }
                else
                {
                    console.log(err);
                }
                console.log(tstTru + "tru test");
                return tstTru;
            }).then( (tst) =>{
                console.log(tst);
                
            })
            console.log(tstTru + " thistst ");
            
            return tstTru;
            }).then( () =>{
                console.log("this is a test");
                
            })   
        
    }


    saveUser(props){

        const newUser = new this.myModel();
        console.log(this.findUser(props.user) + " tst ");
        
        const tst = this.findUser(props.user);
        console.log(tst);
        
        
            // newUser.userName = props.user;
            // newUser.password = props.pass;
            // newUser.email = props.email;

            // newUser.save( (err) =>{

            //     if ( err )
            //     {
            //         console.log(err);
            //     }
            //     else
            //     {
            //         console.log("completed");
            //     }
                
            // })
        
        
        
        

    }



}




module.exports =  connectAtlas;
