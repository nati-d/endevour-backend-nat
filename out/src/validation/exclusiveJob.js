"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const Recommender = joi_1.default.object({
    first_name: joi_1.default.string().required(),
    last_name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
});
exports.default = {
    Recommender,
};
