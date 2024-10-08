"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../prisma/index"));
const client_1 = require("@prisma/client");
const lodash_1 = __importDefault(require("lodash"));
const index_2 = __importDefault(require("../../validation/index"));
const response_1 = __importDefault(require("../../types/response"));
exports.default = async (req, res, next) => {
    try {
        const { error } = index_2.default.job.jobPost.validate(req.body);
        if (error) {
            return res
                .status(400)
                .send(new response_1.default(false, "unidentified request content", error.details));
        }
    }
    catch (error) {
        return res
            .status(400)
            .send(new response_1.default(false, "Error at request validation", error));
    }
    let jobId = 0;
    try {
        const newJobPost = await index_1.default.client.job_post.create({
            data: {
                title: req.body.title,
                overview: req.body.overview,
                body: req.body.body,
                contract_type: req.body.contract_type,
                year_of_experience: parseInt(req.body.year_of_experience),
                category: parseInt(req.body.category),
                closing_date: new Date(req.body.closing_date),
                verified_at: new Date(),
                verified_by: req.auth.is_admin == true ? req.auth?.id : null,
                posted_by: req.auth.is_admin == false ? req.auth?.id : null,
                tags: {
                    connectOrCreate: req.body.tags.map((name) => ({
                        where: { name },
                        create: { name },
                    })),
                },
            },
            include: { tags: { select: { name: true } } },
        });
        jobId = newJobPost.id;
        const salary = await index_1.default.client.salary.create({
            data: {
                id: newJobPost.id,
                low_end: parseInt(req.body.low_end),
                high_end: parseInt(req.body.high_end),
                periodicity: req.body.periodicity,
                currency: req.body.currency,
            },
        });
        const getSubscribedUsers = await index_1.default.client.personalized_alerts.findMany({
            where: {
                alert_for: "job",
            },
            include: {
                user: {
                    select: {
                        email: true,
                    },
                },
            },
        });
        const userEmails = getSubscribedUsers.map((alert) => alert.user.email);
        req.emailData = {
            html: "Personalized alert notification",
            sendTo: userEmails,
            subject: "New job for you",
            resMessage: "Job posted successfully",
            otherData: lodash_1.default.merge(newJobPost, salary),
            statusCode: 201,
        };
        next();
    }
    catch (error) {
        console.log(error);
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if ((error.code = "P2022")) {
                return res
                    .status(400)
                    .json(new response_1.default(false, "Invalid job category id.", error));
            }
        }
        try {
            if (jobId != 0)
                await index_1.default.client.job_post.delete({
                    where: {
                        id: jobId,
                    },
                });
        }
        catch (error) {
            console.log(error);
        }
        return res
            .status(400)
            .json(new response_1.default(false, "error while creating job post", error));
    }
};
