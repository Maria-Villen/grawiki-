import { inject, injectable } from "inversify";
import { IRequestHandler } from "../../../shared/application/IRequestHandler";
import { ResponseBase } from "../../../shared/application/ResponseBase";
import { hashPassword } from "../../../shared/application/hashPassword";
import { IUserRepository } from "../../domain/IUserRepository";
import { NicknameAlreadyExistsError } from "../../domain/NicknameAlreadyExistsError";
import { User } from "../../domain/User";
import { UserEmail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserNickname } from "../../domain/UserNickname";
import { UserPassword } from "../../domain/UserPassword";
import { ICreateUserRequest } from "./ICreateUserRequest";
import "reflect-metadata";

@injectable()
export class CreateUserHandler implements IRequestHandler {
  private userRepository : IUserRepository;

  constructor(@inject("UserRepository") userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async handle(request: ICreateUserRequest): Promise<ResponseBase<void>> {
    const existUser = await this.userRepository.getByNickname(request.nickname);

    if (existUser !== undefined) {
      throw new NicknameAlreadyExistsError();
    }
    const user = new User(
      new UserId(),
      new UserEmail(request.email),
      new UserNickname(request.nickname),
      new UserPassword(await hashPassword(request.password)),
      "system"
    );
    await this.userRepository.create(user);
    const response = new ResponseBase<void>(true);
    return response;
  }
}
