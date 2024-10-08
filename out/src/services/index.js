"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const sendEmail_1 = __importDefault(require("./notifications/sendEmail"));
require("./auth");
var Services;
(function (Services) {
    Services.b = bcrypt_1.default;
    Services.mailto = sendEmail_1.default;
})(Services || (Services = {}));
exports.default = Services;
