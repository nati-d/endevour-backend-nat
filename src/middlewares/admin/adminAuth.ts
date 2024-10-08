import { Request, Response } from "express";

const adminAuth = async (req: Request, res: Response, next: any) => {
  if (!req.auth?.is_admin)
    return res
      .status(403)
      .json({ success: false, message: "Access denied. lack admin" });
  next();
};

export default adminAuth;
