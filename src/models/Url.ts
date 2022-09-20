import mongoose from "mongoose";

const urlModel = new mongoose.Schema({
    longUrl : String , 
    shortUrl : String ,
    date : {
        type : String ,
        default : Date.now()
    }
})

export default mongoose.model('Url' , urlModel);