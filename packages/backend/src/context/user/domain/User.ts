import { UserNickname } from "./UserNickname";
import { UserPassword } from "./UserPassword";
import { EntityBase } from "../../shared/domain/EntityBase";
import { UserId } from "./UserId";

export class User extends EntityBase {
    nickname: UserNickname;
    password: UserPassword;
    /**
     *
     */
    constructor(id: UserId, nickname: UserNickname, password: UserPassword, createdBy: string) {
        super(id, createdBy);
        this.nickname = nickname;
        this.password = password;
    }
}
