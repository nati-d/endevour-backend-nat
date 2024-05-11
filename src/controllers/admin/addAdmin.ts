import { Request, Response } from "express";
import prisma from "../../prisma/client/prismaClient";
import { Admin } from "../../types/types";
import { newAdmin } from "../../validation/admin";
import _ from "lodash";
import ApiResponse from "../../types/response";
import sendEmail from "../../services/notifications/sendEmail";
import hashPassword from "../../helpers/hashPassword";
import { Prisma } from "@prisma/client";

const addAdmin = async (req: Request, res: Response) => {
  const { first_name, last_name, email, password, phone_number, role } =
    req.body as Admin;

  const { error } = newAdmin.validate(req.body);

  if (error) return res.status(400).json(new ApiResponse(false, error.message));

  try {
    const hashedPassword = await hashPassword(password);

    const createAdmin = await prisma.admin.create({
      data: {
        first_name,
        last_name,
        email,
        phone_number,
        password: hashedPassword,
        role,
      },
    });

    await sendEmail(
      email,
      "Endevour Admin Credential",
      `<p> Email: <b> ${email}</b></p> <p> Password: <b>${password}</b></p> `
    );

    return res.status(201).json(
      new ApiResponse(
        true,
        `Admin added successfully. We have send the credential to ${email}`,
        _.pickBy(createAdmin, (value, key) => key !== "password")
      )
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002")
        return res
          .status(400)
          .json(new ApiResponse(false, "Admin email already exists!"));
    }

    await prisma.admin.delete({
      where: {
        email,
      },
    });

    return res
      .status(500)
      .json(
        new ApiResponse(
          false,
          "Failed to created new admin please try again!",
          null,
          error
        )
      );
  }
};

export default addAdmin;
