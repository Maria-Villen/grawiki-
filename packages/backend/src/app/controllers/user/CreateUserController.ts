import { Request, Response, NextFunction } from "express";
import { IController } from "../IController";
import httpStatus from "http-status";
import { CreateUserHandler } from "../../../context/user/application/signup/CreateUserHandler";
import "reflect-metadata";
import { inject, injectable } from "inversify";

type CreatePostRequest = Request & {
  body: {
    email: string;
    nickname: string;
    password: string;
  };
};

@injectable()
export class CreateUserController implements IController {
  private createUserHandler: CreateUserHandler;
  constructor(
    @inject("CreateUserHandler") createUserHandler: CreateUserHandler
  ) {
    this.createUserHandler = createUserHandler;
  }

  async run(
    req: CreatePostRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { email, nickname, password } = req.body;

    this.createUserHandler
      .handle({ email, nickname, password })
      .then((result) => {
        res.status(httpStatus.CREATED).send(result);
      })
      .catch((error) => {
        next(error);
      });
  }
}
