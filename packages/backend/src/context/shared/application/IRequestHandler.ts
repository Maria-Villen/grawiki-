export interface IRequestHandler<IRequest, T>{
    handle(request :IRequest): T;
}