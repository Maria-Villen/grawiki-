import { Container } from "inversify";
import { CreateUserHandler } from "../context/user/application/signup/CreateUserHandler";
import { IUserRepository } from "../context/user/domain/IUserRepository";
import { UserRepository } from "../context/user/infrastructure/UserRepository";
import { IController } from "./controllers/IController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { IRequestHandler } from "src/context/shared/application/IRequestHandler";

export const container = new Container();
container.bind<IUserRepository>("UserRepository").to(UserRepository);
container.bind<IRequestHandler>("CreateUserHandler").to(CreateUserHandler);
container.bind<IController>("CreateUserController").to(CreateUserController);
