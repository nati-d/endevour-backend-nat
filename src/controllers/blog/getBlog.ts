import prisma from "../../prisma/index";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import _, { parseInt } from "lodash";
import Validator from "../../validation/index";
import ApiResponse from "../../types/response";

export default async (req: Request, res: Response) => {
    const { error } = Validator.blog.getBlog.validate(req.body);

    if (error) {
        return res.status(400).json(new ApiResponse(false, "unidentified request content", error.details));
    }

    try {
        let id = parseInt(req.query.id as string) || req.body.id;
        let title = req.query.title as string || req.body.title;
        let verified_by = parseInt(req.query.verified_by as string) || req.body.verified_by;
        let posted_by = parseInt(req.query.posted_by as string) || req.body.posted_by;
        let date_lower_bound = (req.query.date_lower_bound as string) || req.body?.date?.lower_bound;
        let date_upper_bound = (req.query.date_upper_bound as string) || req.body?.date?.upper_bound;
        let tags = !req.query.tags ? undefined : JSON.parse(req.query.tags as string) || req.body.tags; 
        let where = {
            id,
            title,
            verified_by,
            posted_by,
            created_at: {
                gte: date_lower_bound,
                lte: date_upper_bound
            },
            tags: tags && tags.length > 0 ? { some: { name: { in: tags } } } : {}
        }

        let blog: any;
        let totalPages: number = 0;
        let page = req.query.page ? ( parseInt(req.query.page as string) - 1 ) * 10 :req.body.page ? ( req.body.page - 1 ) * 10 : 0;

        if (req.auth?.role == "ADMIN" || req.auth?.role == "SUPER_ADMIN") {
            blog = await prisma.client.blog.findMany({
                take: 10,
                skip: page,
                where,
                include: {
                    tags: {
                        select: {
                            name: true,
                        },
                    },
                },
                orderBy: {
                    id: 'desc'
                }
            })
        }

        else
        blog = await prisma.client.blog.findMany({
            take: 1,
            skip: 3,
            where,
            include: {
                tags: {
                    select: {
                        name: true,
                    },
                },
            }
        });

        totalPages = await prisma.client.blog.count({ where });

        totalPages = Math.ceil( totalPages / 10 );

        let __tags = await prisma.client.tag.findMany({
            where: {
                blog: { some: { } }
            },
            select: {
                name: true
            }
        });

        let _tags = __tags.map(data => data.name);

        return res.status(200).json(new ApiResponse(true, "blog fetched successfully", ({ blog, total_pages: totalPages, tags: _tags })));

    } catch (error) {
        console.error(error);

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2022")
            return res.status(403).json(new ApiResponse(false, "not authorized to get blogs"))
        }

        return res.status(400).json(new ApiResponse(false, "error while getting blog"));
    }

}
