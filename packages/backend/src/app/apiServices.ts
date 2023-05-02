import { CreateUserHandler } from "../context/user/application/signup/CreateUserHandler";
import { IUserRepository } from "../context/user/domain/IUserRepository";
import { UserRepository } from "../context/user/infrastructure/UserRepository";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { ServiceCollection } from "./modules/serviceCollection";

export const services = new ServiceCollection();

//Users

services.register<IUserRepository>("UserRepository", UserRepository);
services.register("CreateUserHandler", CreateUserHandler, ["UserRepository"]);
services.register("CreateUserController", CreateUserController, ["CreateUserHandler"]);
