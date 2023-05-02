import { Request, Response, NextFunction } from "express";
import { IController } from "../IController";
import httpStatus from "http-status";
import { CreateUserHandler } from "../../../context/user/application/signup/CreateUserHandler";

type CreatePostRequest = Request & {
    body: {
        nickname: string;
        password: string;
    };
};

export class CreateUserController implements IController {
    constructor(private CreateUserHandler: CreateUserHandler) {}

    async run(req: CreatePostRequest, res: Response, next: NextFunction): Promise<void> {
        const { nickname, password } = req.body;

        this.CreateUserHandler
            .handle({ nickname, password })
            .then((result) => {
                res.status(httpStatus.CREATED).send(result);
            })
            .catch((error) => {
                next(error);
            });
    }
}