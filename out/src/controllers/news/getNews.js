"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../prisma/index"));
const client_1 = require("@prisma/client");
const index_2 = __importDefault(require("../../validation/index"));
const response_1 = __importDefault(require("../../types/response"));
exports.default = async (req, res) => {
    const { error } = index_2.default.news.getNews.validate(req.body);
    if (error)
        return res
            .status(400)
            .json(new response_1.default(false, "unidentified request content", error.details));
    try {
        let id = parseInt(req.query.id) || req.body.id;
        let title = req.query.title || req.body.title;
        let posted_by = parseInt(req.query.posted_by) || req.body.posted_by;
        let date_lower_bound = req.query.date_lower_bound || req.body?.date?.lower_bound;
        let date_upper_bound = req.query.date_upper_bound || req.body?.date?.upper_bound;
        let tags = !req.query.tags
            ? undefined
            : JSON.parse(req.query.tags) || req.body.tags;
        let where = {
            id,
            title,
            posted_by,
            created_at: {
                gte: date_lower_bound,
                lte: date_upper_bound,
            },
            tags: tags && tags.length > 0 ? { some: { name: { in: tags } } } : {},
        };
        let news;
        let totalPages = 0;
        let page = req.query.page
            ? (parseInt(req.query.page) - 1) * 10
            : req.body.page
                ? (req.body.page - 1) * 10
                : 0;
        let currentPage = page ? page / 10 + 1 : 1;
        news = await index_1.default.client.news.findMany({
            take: 10,
            skip: page,
            where,
            include: {
                tags: { select: { name: true } },
                admin: {
                    select: {
                        id: true,
                        first_name: true,
                        last_name: true,
                        email: false,
                        phone_number: false,
                        password: false,
                        role: false,
                        profile_image: true,
                        created_at: false,
                        updated_at: false,
                    },
                },
            },
            orderBy: {
                created_at: "desc",
            },
        });
        totalPages = await index_1.default.client.news.count({ where });
        totalPages = Math.ceil(totalPages / 10);
        let __tags = await index_1.default.client.tag.findMany({
            where: {
                news: { some: {} },
            },
            select: {
                name: true,
            },
        });
        let _tags = __tags.map((data) => data.name);
        res.status(200).json(new response_1.default(true, "News getted successfully", {
            news: news,
            total_pages: totalPages,
            current_page: currentPage,
            next_page: currentPage >= totalPages ? null : currentPage + 1,
            tags: _tags,
        }));
    }
    catch (error) {
        console.error("Error while posting news:", error);
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2022")
                return res
                    .status(400)
                    .json(new response_1.default(false, "Not authorized to post news", error));
        }
        return res
            .status(500)
            .json(new response_1.default(false, "Error while posting news", error));
    }
};
