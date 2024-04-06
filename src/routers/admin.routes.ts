import express from "express";
import Controller from "../controllers/index";
import Middleware from "../middlewares/index";
import Services from "../services";

const router = express.Router();

router.post(
  "/auth/add-admin",
  [Middleware.tokenAuth, Middleware.adminAuth, Middleware.superAdminAuth],
  Controller.addAdmin
);

router.post("/auth/login", Controller.adminLogin);

router.get(
  "/get-admins",
  [Middleware.tokenAuth, Middleware.adminAuth, Middleware.superAdminAuth],
  Controller.getAdmins
);

router.get(
  "/confirm-password",
  [Middleware.tokenAuth, Middleware.adminAuth],
  Controller.confirmPassword
);

router.post(
  "/upload-profile-img",
  [
    Middleware.tokenAuth,
    Middleware.adminAuth,
    Middleware.uploadFile("images/profile_images/admin").single(
      "profile_image"
    ),
  ]
  // Controller.adminProfileImgUpload
);

router.post("/forgot-password", Services.forgotPassword);

router.post(
  "/verify-forgot-password-confirmation-code",
  Services.verifyConfirmationCode
);
export default router;
