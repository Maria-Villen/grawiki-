import { services } from "../../DI/ApiServices";
import { CreateBorrowerController } from "../../controllers/borrower/CreateBorrowerController";
import { Controller } from "../../controllers/Controller";
import { Router, Request, Response, NextFunction } from "express";
import { CreateBorrowerValidator } from "../../../context/borrower/application/signup/CreateBorrowerValidator";
import { ValidateReqSchema } from "../../middlewares/ValidationErrorMiddleware";

export const register = (router: Router): void => {
    const controller: Controller = services.resolve<CreateBorrowerController>(
        "CreateBorrowerController"
    );

    router.post(
        "/user/signup",
        CreateBorrowerValidator,
        ValidateReqSchema,
        (req: Request, res: Response, next: NextFunction) => {
            controller.run(req, res, next);
        }
    );
};