const Joi = require("joi");

module.exports = Joi.object({
  word1: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Word1 is required",
    "string.min": "Word1 must be at least 3 characters long",
    "string.max": "Word1 must be at most 50 characters long",
  }),
  word2: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Word2 is required",
    "string.min": "Word2 must be at least 3 characters long",
    "string.max": "Word2 must be at most 50 characters long",
  }),
  word3: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Word3 is required",
    "string.min": "Word3 must be at least 3 characters long",
    "string.max": "Word3 must be at most 50 characters long",
  }),
  word4: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Word4 is required",
    "string.min": "Word4 must be at least 3 characters long",
    "string.max": "Word4 must be at most 50 characters long",
  }),
  word5: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Word5 is required",
    "string.min": "Word5 must be at least 3 characters long",
    "string.max": "Word5 must be at most 50 characters long",
  }),
  word6: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Word6 is required",
    "string.min": "Word6 must be at least 3 characters long",
    "string.max": "Word6 must be at most 50 characters long",
  }),
  word7: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Word7 is required",
    "string.min": "Word7 must be at least 3 characters long",
    "string.max": "Word7 must be at most 50 characters long",
  }),
  word8: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Word8 is required",
    "string.min": "Word8 must be at least 3 characters long",
    "string.max": "Word8 must be at most 50 characters long",
  }),
  word9: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Word9 is required",
    "string.min": "Word9 must be at least 3 characters long",
    "string.max": "Word9 must be at most 50 characters long",
  }),
  word10: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Word10 is required",
    "string.min": "Word10 must be at least 3 characters long",
    "string.max": "Word10 must be at most 50 characters long",
  }),
  word11: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Word11 is required",
    "string.min": "Word11 must be at least 3 characters long",
    "string.max": "Word11 must be at most 50 characters long",
  }),
  word12: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Word12 is required",
    "string.min": "Word12 must be at least 3 characters long",
    "string.max": "Word12 must be at most 50 characters long",
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
