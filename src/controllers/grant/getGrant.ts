import prisma from "../../prisma/index";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import ApiResponse from "../../types/response";

export default async (req: Request, res: Response) => {
  try {
    let id = parseInt(req.query.id as string) || req.body.id;
    let title = (req.query.title as string) || req.body.title;
    let verified_by =
      parseInt(req.query.verified_by as string) || req.body.verified_by;
    let opportunity_number =
      (req.query.opportunity_number as string) || req.body.opportunity_number;
    let cfda = (req.query.cfda as string) || req.body.cfda;
    let date_lower_bound =
      (req.query.date_lower_bound as string) || req.body?.date?.lower_bound;
    let date_upper_bound =
      (req.query.date_upper_bound as string) || req.body?.date?.upper_bound;
    let tags = !req.query.tags
      ? undefined
      : JSON.parse(req.query.tags as string) || req.body.tags;
    let where = {
      id,
      title,
      opportunity_number,
      cfda,
      verified_by,
      created_at: {
        gte: date_lower_bound,
        lte: date_upper_bound,
      },
      tags: tags && tags.length > 0 ? { some: { name: { in: tags } } } : {},
    };

    let grant: any;
    let totalPages: number = 0;
    let page = req.query.page
      ? (parseInt(req.query.page as string) - 1) * 10
      : req.body.page
      ? (req.body.page - 1) * 10
      : 0;
    let currentPage = page ? page / 10 + 1 : 1;

    grant = await prisma.client.grant.findMany({
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

    totalPages = await prisma.client.grant.count({ where });

    totalPages = Math.ceil(totalPages / 10);

    let __tags = await prisma.client.tag.findMany({
      where: {
        grant: { some: {} },
      },
      select: {
        name: true,
      },
    });

    let _tags = __tags.map((data) => data.name);

    return res.status(200).json(
      new ApiResponse(true, "grants fetched successfully", {
        grant: grant,
        total_pages: totalPages,
        current_page: currentPage,
        next_page: currentPage >= totalPages ? null : currentPage + 1,
        tags: _tags,
      })
    );
  } catch (error) {
    console.error("Error while posting grant:", error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2022")
        return res
          .status(400)
          .json(new ApiResponse(false, "Not authorized to get get"));
    }

    return res
      .status(500)
      .json(new ApiResponse(false, "Error while fetching grants"));
  }
};
