import mongoose from "mongoose";


function connect(cb:(err:Error | any , message:string)=> void):void{
    mongoose.connect(process.env.MONGODB_URI!)
    .then(()=>{
        cb(null , 'connect to database');
    })
    .catch((err)=>{
        cb('connection is failed | Error: ' + err , '')
    })
}

export default connect ;