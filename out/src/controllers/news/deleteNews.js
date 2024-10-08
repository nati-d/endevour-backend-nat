"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../prisma/index"));
const client_1 = require("@prisma/client");
const response_1 = __importDefault(require("../../types/response"));
exports.default = async (req, res) => {
    try {
        const newNews = await index_1.default.client.news.delete({
            where: { id: parseInt(req.query.id) }
        });
        return res.status(204).json(new response_1.default(true, "News deleted successfully", newNews));
    }
    catch (error) {
        console.log(error);
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2025")
                return res.status(404).json(new response_1.default(false, "resource to be deleted not found", error));
            if (error.code = "P2015") {
                return res.status(400).json(new response_1.default(false, 'Record to delete does not exist', error));
            }
        }
        return res.status(500).json(new response_1.default(false, "Error while deleting news", error));
    }
};
