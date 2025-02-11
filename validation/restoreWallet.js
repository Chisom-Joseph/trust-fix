const Joi = require("joi");

const phrase12 = Joi.object({
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
  checkbox: Joi.string().valid("on").required().messages({
    "any.only": "Checkbox must be checked",
    "string.empty": "Checkbox selection is required",
  }),
});

const phrase24 = Joi.object({
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
  phrase_13: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_13 is required",
    "string.min": "phrase_13 must be at least 3 characters long",
    "string.max": "phrase_13 must be at most 50 characters long",
  }),
  phrase_14: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_14 is required",
    "string.min": "phrase_14 must be at least 3 characters long",
    "string.max": "phrase_14 must be at most 50 characters long",
  }),
  phrase_15: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_15 is required",
    "string.min": "phrase_15 must be at least 3 characters long",
    "string.max": "phrase_15 must be at most 50 characters long",
  }),
  phrase_16: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_16 is required",
    "string.min": "phrase_16 must be at least 3 characters long",
    "string.max": "phrase_16 must be at most 50 characters long",
  }),
  phrase_17: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_17 is required",
    "string.min": "phrase_17 must be at least 3 characters long",
    "string.max": "phrase_17 must be at most 50 characters long",
  }),
  phrase_18: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_18 is required",
    "string.min": "phrase_18 must be at least 3 characters long",
    "string.max": "phrase_18 must be at most 50 characters long",
  }),
  phrase_19: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_19 is required",
    "string.min": "phrase_19 must be at least 3 characters long",
    "string.max": "phrase_19 must be at most 50 characters long",
  }),
  phrase_20: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_20 is required",
    "string.min": "phrase_20 must be at least 3 characters long",
    "string.max": "phrase_20 must be at most 50 characters long",
  }),
  phrase_21: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_21 is required",
    "string.min": "phrase_21 must be at least 3 characters long",
    "string.max": "phrase_21 must be at most 50 characters long",
  }),
  phrase_22: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_22 is required",
    "string.min": "phrase_22 must be at least 3 characters long",
    "string.max": "phrase_22 must be at most 50 characters long",
  }),
  phrase_23: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_23 is required",
    "string.min": "phrase_23 must be at least 3 characters long",
    "string.max": "phrase_23 must be at most 50 characters long",
  }),
  phrase_24: Joi.string().min(3).max(50).required().messages({
    "string.empty": "phrase_24 is required",
    "string.min": "phrase_24 must be at least 3 characters long",
    "string.max": "phrase_24 must be at most 50 characters long",
  }),
  checkbox: Joi.string().valid("on").required().messages({
    "any.only": "Checkbox must be checked",
    "string.empty": "Checkbox selection is required",
  }),
});

module.exports = { phrase12, phrase24 };
