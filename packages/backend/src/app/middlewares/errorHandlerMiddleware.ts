import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { ResponseBase } from "../../context/shared/application/ResponseBase";
import { ValidationError } from "../../context/shared/domain/ValidationError";

export function errorHandlerMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    

    const response = new ResponseBase<void>(false, "Internal Server Error", err.message);

    let statusCode: number;
    if (err instanceof ValidationError) {
        response.message = err.message;
        response.errors = err.errors;
        statusCode = httpStatus.UNPROCESSABLE_ENTITY;
    } else {
        statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    }

    res.status(statusCode).send(response);
    next(err);
}