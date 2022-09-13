import { Errback , Request , Response , NextFunction } from 'express';

function invalidUrl(req:Request,res:Response,next:NextFunction):void{
    res.status(404).json({
        messgae : 'url is Invalid'
    })
}

function error(err:Errback,req:Request,res:Response,next:NextFunction):void{
    res.status(500).json({
        messgae : "internal server error"
    });
}

export {
    invalidUrl ,
    error
};