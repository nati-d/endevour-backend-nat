import express, { Router } from "express";
import Controller from "../controllers/index";
import Middleware from "../middlewares/index";

const router: Router = express.Router();

router.get("/search-by-keyword", Controller.searchNewsByKeyWord);

router.post(
  "/create-news",
  [
    Middleware.tokenAuth,
    Middleware.adminAuth,
    Middleware.uploadFile().array("thumbnail"),
  ],
  Controller.createNews
);

router.get("/get-news", Controller.getNews);

router.get("/get-news-by-id", Controller.getNewsById);

router.put(
  "/update-news",
  [
    Middleware.tokenAuth,
    Middleware.adminAuth,
    Middleware.uploadFile().array("thumbnail"),
  ],
  Controller.updateNews
);

router.delete(
  "/delete-news",
  [Middleware.tokenAuth, Middleware.adminAuth],
  Controller.deleteNews
);

export default router;
