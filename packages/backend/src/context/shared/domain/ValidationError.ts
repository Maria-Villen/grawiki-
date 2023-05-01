export class ValidationError extends Error {
    message: string;
    errors?: object;
    constructor(errors: object) {
        super();
        this.message = "One or more validation errors was found";
        this.errors = errors;
    }
}