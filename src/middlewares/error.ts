import { Errback , Request , Response , NextFunction } from 'express';

function invalidUrl(req:Request,res:Response,next:NextFunction):void{
    res.status(400).json({
        messgae : 'Invaild request' ,
        status : 400
    })
}

function error(err:Errback,req:Request,res:Response,next:NextFunction):void{
    res.status(500).json({
        message  : "internal server error" ,
        status : 500
    });
}

export {
    invalidUrl ,
    error
};