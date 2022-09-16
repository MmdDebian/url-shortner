import mongoose from "mongoose";

const urlModel = new mongoose.Schema({
    urlCode : String , 
    longUrl : String , 
    shortUrl : String ,
    data : {
        type : String ,
        default : Date.now()
    }
})

export default mongoose.model('Url' , urlModel);