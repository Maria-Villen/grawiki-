import { IRequest } from "src/context/shared/application/IRequest";
import { ResponseBase } from "src/context/shared/application/ResponseBase";

export interface ICreateUserRequest extends IRequest<Promise<ResponseBase<void>>>{
    nickname: string;
    password: string;
}