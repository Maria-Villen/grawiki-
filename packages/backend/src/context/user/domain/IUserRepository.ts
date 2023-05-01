import { User } from "./User";
import { IRepository } from "../../shared/domain/IRepository";

export interface IUserRepository extends IRepository<User> {
    getByNickname (nickname: string) : Promise<User | undefined>;
}