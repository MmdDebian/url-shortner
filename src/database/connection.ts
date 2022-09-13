import mongoose from "mongoose";


function connect(cb:(err:Error | any , message:string)=> void):void{
    mongoose.connect('mongodb://localhost:27017/url-shortner')
    .then(()=>{
        cb(null , 'connect to database');
    })
    .catch((err)=>{
        cb('connection is failed | Error: ' + err , '')
    })
}

export default connect ;