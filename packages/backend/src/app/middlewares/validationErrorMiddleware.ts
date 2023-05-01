
import { Request, Response, NextFunction } from "express";
import { ValidationError, validationResult } from "express-validator";
import httpStatus from "http-status";
import { ResponseBase } from "../../context/shared/application/ResponseBase";

export function ValidateReqSchema(req: Request, res: Response, next: NextFunction) {
    const validationsErrors = validationResult(req);

    if (validationsErrors.isEmpty()) {
        return next();
    }

    const errors = validationsErrors
        .array()
        .map((err: ValidationError) => ({ [err.type]: err.msg }));

    const response = new ResponseBase(false, "one or more validation errors was found", errors);
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({ response });
}