import express from "express";
const router = express.Router();
import Common from "../controllers/common";
import Middleware from "../middlewares/index";

router.post("/forgot-password/get-confirmation-code", Common.forgotPassword);

router.post("/email-subscription", Common.emailSubscription);

router.post(
  "/forgot-password/verify-confirmation-code",
  Common.verifyConfirmationCode
);

router.post("/forgot-password/change-password", Common.changePassword);

router.post(
  "/get-post-url",
  [Middleware.tokenAuth, Middleware.uploadFile("posts").single("post")],
  Common.getPostUrl
);
export default router;
