import { IRequestHandler } from "../../../shared/application/IRequestHandler";
import { ResponseBase } from "../../../shared/application/ResponseBase";
import { hashPassword } from "../../../shared/application/hashPassword";
import { IUserRepository } from "../../domain/IUserRepository";
import { NicknameAlreadyExistsError } from "../../domain/NicknameAlreadyExistsError";
import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserNickname } from "../../domain/UserNickname";
import { UserPassword } from "../../domain/UserPassword";
import { ICreateUserRequest } from "./ICreateUserRequest";

export class CreateUserHandler
    implements IRequestHandler<ICreateUserRequest, Promise<ResponseBase<void>>>
{
    constructor(private readonly UserRepository: IUserRepository) {}

    async handle(request: ICreateUserRequest): Promise<ResponseBase<void>> {
        const existUser = await this.UserRepository.getByNickname(request.nickname);

        if (existUser !== undefined) {
            throw new NicknameAlreadyExistsError();
        }
        const user = new User(
            new UserId(),
            new UserNickname(request.nickname),
            new UserPassword(await hashPassword(request.password)),
            "system"
        );
        await this.UserRepository.create(user);
        const response = new ResponseBase<void>(true);
        return response;
    }
}
