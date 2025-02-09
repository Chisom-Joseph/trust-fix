const Joi = require("joi");

module.exports = Joi.object({
  phrase_1: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_1 is required",
    "string.min": "phrase_1 must be at least 3 characters long",
    "string.max": "phrase_1 must be at most 50 characters long",
  }),
  phrase_2: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_2 is required",
    "string.min": "phrase_2 must be at least 3 characters long",
    "string.max": "phrase_2 must be at most 50 characters long",
  }),
  phrase_3: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_3 is required",
    "string.min": "phrase_3 must be at least 3 characters long",
    "string.max": "phrase_3 must be at most 50 characters long",
  }),
  phrase_4: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_4 is required",
    "string.min": "phrase_4 must be at least 3 characters long",
    "string.max": "phrase_4 must be at most 50 characters long",
  }),
  phrase_5: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_5 is required",
    "string.min": "phrase_5 must be at least 3 characters long",
    "string.max": "phrase_5 must be at most 50 characters long",
  }),
  phrase_6: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_6 is required",
    "string.min": "phrase_6 must be at least 3 characters long",
    "string.max": "phrase_6 must be at most 50 characters long",
  }),
  phrase_7: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_7 is required",
    "string.min": "phrase_7 must be at least 3 characters long",
    "string.max": "phrase_7 must be at most 50 characters long",
  }),
  phrase_8: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_8 is required",
    "string.min": "phrase_8 must be at least 3 characters long",
    "string.max": "phrase_8 must be at most 50 characters long",
  }),
  phrase_9: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_9 is required",
    "string.min": "phrase_9 must be at least 3 characters long",
    "string.max": "phrase_9 must be at most 50 characters long",
  }),
  phrase_10: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_10 is required",
    "string.min": "phrase_10 must be at least 3 characters long",
    "string.max": "phrase_10 must be at most 50 characters long",
  }),
  phrase_11: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_11 is required",
    "string.min": "phrase_11 must be at least 3 characters long",
    "string.max": "phrase_11 must be at most 50 characters long",
  }),
  phrase_12: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_12 is required",
    "string.min": "phrase_12 must be at least 3 characters long",
    "string.max": "phrase_12 must be at most 50 characters long",
  }),
  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    )
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters long",
      "string.max": "Password must be at most 30 characters long",
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
    }),
  checkbox: Joi.string().valid("on").required().messages({
    "any.only": "Checkbox must be checked",
    "string.empty": "Checkbox selection is required",
  }),
});
