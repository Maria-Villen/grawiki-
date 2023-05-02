import { Router, Request, Response, NextFunction } from "express";
import { container } from "../../IoC";
import { CreateUserValidator } from "../../../context/user/application/signup/CreateUserValidator";
import { ValidateReqSchema } from "../../middlewares/validationErrorMiddleware";
import { IController } from "../../controllers/IController";
import { CreateUserController } from "../../controllers/user/CreateUserController";

export const register = (router: Router): void => {
    const controller: IController = container.resolve(CreateUserController);
   
    router.post(
        "/user/signup",
        CreateUserValidator,
        ValidateReqSchema,
        (req: Request, res: Response, next: NextFunction) => {
            controller.run(req, res, next);
        }
    );
};
