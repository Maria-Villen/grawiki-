import { body } from "express-validator";

export const CreateUserValidator = [
    body("email")
        .exists()
        .withMessage("El correo electrónico es obligatorio")
        .isString()
        .withMessage("El correo electrónico debe ser una cadena de caracteres")
        .isEmail()
        .withMessage("El correo electrónico debe ser válido"),
        
    body("nickname")
        .exists()
        .withMessage("El Nickname es obligatorio")
        .trim()
        .isString()
        .withMessage("El nickname debe ser una cadena de caracteres")
        .isLength({ min: 8, max: 100 })
        .withMessage("El nickname debe tener entre 8 y 100 caracteres"),

    body("password")
        .exists()
        .withMessage("La contraseña es obligatoria")
        .isString()
        .withMessage("La contraseña debe ser una cadena de caracteres")
        .isLength({ min: 8, max: 100 })
        .withMessage("La contraseña debe tener al menos 8 caracteres"),
];
