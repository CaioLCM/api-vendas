import { AppError } from "@/common/domain/app-error";
import { NextFunction, Request, Response } from "express";

export function errorHandler(err:Error, req:Request, res:Response, next: NextFunction):Response{
    if (err instanceof AppError){
        return res.status(err.statuscode).json({status: 'error', message: err.message})
    }
    
}