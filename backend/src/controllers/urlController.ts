import { Request , Response } from 'express';
import dns from 'dns';
import shortid from 'shortid';
import Url from '../models/Url';

// the API base url enpoint 
const baseUrl = 'http://localhost:3001'


export async function shorten(req:Request,res:Response){
    let { longUrl } = req.body ;
    let orginalUrl:any ;

    const foundUrl = await Url.findOne({ longUrl : longUrl });

    if(foundUrl){
        return res.send({data : foundUrl.shortUrl});
    }
    
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

        const urlCode = shortid.generate();
        const shortUrl = `${baseUrl}/${urlCode}`;
        const newUrl = new Url({
            code : urlCode ,
            longUrl : longUrl ,
            shortUrl : shortUrl
        })

        const result = await newUrl.save();

        res.send({message : 'successfully created short Url' , data : result.shortUrl});
    });

}

export async function getUrl(req:Request,res:Response){
    let id = req.params.id ; 
    const foundUrl = await Url.findOne({ code : id });

    if(!foundUrl){
        return res.status(404).send('url is not found');
    }

    res.redirect(foundUrl.longUrl!);
}