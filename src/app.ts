import dotenv from 'dotenv';
import express , { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mainRouter from './routes/index'; 


// create express app 
const app:Application = express();

dotenv.config();
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(mainRouter);


export default app ; 