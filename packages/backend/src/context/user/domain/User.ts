import { UserNickname } from "./UserNickname";
import { UserPassword } from "./UserPassword";
import { EntityBase } from "../../shared/domain/EntityBase";
import { UserId } from "./UserId";
import { UserEmail } from "./UserEmail";

export class User extends EntityBase {
    email: UserEmail;
    nickname: UserNickname;
    password: UserPassword;
  
    constructor(id: UserId, email : UserEmail, nickname: UserNickname, password: UserPassword, createdBy: string) {
        super(id, createdBy);
        this.email = email;
        this.nickname = nickname;
        this.password = password;
    }
}
