export class NicknameAlreadyExistsError extends Error {
    /**
     *
     */
    constructor() {
        super("User with this Nickname has already been regristred");
    }
}
