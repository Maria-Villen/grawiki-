import { body } from "express-validator";

export const CreateUserValidator = [
    body("nickname")
        .exists()
        .withMessage("El Nickname es obligatorio")
        .trim()
        .isString()
        .withMessage("El nombre debe ser una cadena de caracteres")
        .isLength({ min: 6, max: 100 })
        .withMessage("El nombre debe tener entre 2 y 50 caracteres"),

    body("password")
        .exists()
        .withMessage("La contraseña es obligatoria")
        .isString()
        .withMessage("La contraseña debe ser una cadena de caracteres")
        .isLength({ min: 8, max: 100 })
        .withMessage("La contraseña debe tener al menos 8 caracteres"),
];
