const mongoose = require("mongoose");


class connectAtlas{

    constructor()
    {
        const uri = 'mongodb+srv://admin_Zaen:Rebelt5i@cluster0-lnlwz.mongodb.net/Weather';
        mongoose.connect(uri, {useNewUrlParser: true} ).catch( err => console.log(err));
        

        const Schema = mongoose.Schema;
        const ObjId = Schema.ObjectId;


        const User = new Schema({
            id: ObjId,
            userName: String,
            password: String,
            email: String
        })


        this.myModel = mongoose.model("User", User);
    }

    accessUser(props){

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

    }



}




module.exports =  connectAtlas;
