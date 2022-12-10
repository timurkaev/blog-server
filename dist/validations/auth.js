import { body } from "express-validator";
export const registerValidation = [
    body("fullName", "Укажите имя").isLength({ min: 3 }).isString(),
    body("email", "Неорректный email").isEmail().isString(),
    body("password", "Пароль должен содержать минимум 5 символов")
        .isLength({ min: 5 })
        .isString(),
    body("avatar", "Неверная ссылка на аватарку").optional().isURL(),
];
export const loginValidation = [
    body("email", "Неверный формат почты").isEmpty(),
    body("password", "Пароль должен содержать минимум 5 символов"),
];
