import { Request , Response } from 'express';
import validUrl from 'valid-url';
import shortid from 'shortid';

// the API base url enpoint 
const baseUrl = 'http:localhost:3001'


function shorten(req:Request,res:Response){
    const {} = req.body ;

    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json({message : 'Invalid base Url'})
    }

    
}