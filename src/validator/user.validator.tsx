//  for reuse to keep it DRY regular expression for usernames/titles
// (Letters, numbers, Cyrillic, spaces)

import Joi from "joi";

const nameRegex = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ0-9 ]+$/;

export const userValidator = Joi.object({
    username: Joi.string().trim().min(1).max(20).pattern(nameRegex).required().messages({
        "string.empty": "Username is required",
        "string.min": "Username is too short",
        "string.max": "Username is too long",
        "string.pattern.base": "Only letters, numbers and spaces are allowed",
        "any.required": "Username is required",
    }),
});
