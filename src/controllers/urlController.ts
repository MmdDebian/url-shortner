import { Request , Response } from 'express';
import validUrl from 'valid-url';
import shortid from 'shortid';

// the API base url enpoint 
const baseUrl = 'http:localhost:3001'


export function shorten(req:Request,res:Response){
    const { longUrl } = req.body ;

    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json({message : 'Invalid base Url'})
    }

    const urlCode = shortid.generate();

    // if(!validUrl.isWebUri(longUrl)){
    //     return res.status(401).json({message : 'Invalid base Url'})
    // }

    res.send({
        code: urlCode ,
        status : validUrl.isUri(longUrl)
    });
}