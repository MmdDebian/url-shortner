import app from "../app";
import dotenv from 'dotenv';
import connect from "../database/connection";
import mainRouter from '../routes/index';
import { error, invalidUrl } from "../middlewares/error";

dotenv.config();
const port = process.env.PORT || 4001 ;

app.use('/api' , mainRouter);
app.all('*' , invalidUrl);
app.use(error);

app.listen(port , ()=>{
    console.clear()
    console.log(process.version);
    connect((err , message)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(message)
        }
    })
    console.log('app is runing on port' + port);
})
