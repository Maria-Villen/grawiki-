import { IRequest } from "./IRequest";

export interface IRequestHandler{
    handle(request :IRequest): any;
}