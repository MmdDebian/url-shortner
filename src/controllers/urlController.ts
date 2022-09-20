import { Request , Response } from 'express';
import dns from 'dns';
import shortid from 'shortid';
import Url from '../models/Url';

// the API base url enpoint 
const baseUrl = 'http://localhost:3001'


export function shorten(req:Request,res:Response){
    let { longUrl } = req.body ;
    let orginalUrl:any ;
    
    try{
        orginalUrl = new URL(longUrl);
    }
    catch(err){
        return res.status(400).send({message : 'Invalid URL !'});
    }

    dns.lookup(orginalUrl.hostname , async (err)=>{
        if(err){
            console.log(err);
            return res.status(404).send({ message : 'Address not found !'});
        }

        const shortUrl = baseUrl + `/${shortid.generate()}`;

        const newUrl = new Url({
            longUrl : longUrl ,
            shortUrl : shortUrl ,
        })

        const result = await newUrl.save();

        res.send({message : 'successfully created short Url' , data : result})
    });

}

export function getUrl(req:Request,res:Response){
    let { utl } = req.body; 


}