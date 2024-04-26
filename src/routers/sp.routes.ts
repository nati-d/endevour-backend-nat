import { Router } from "express";
import Middleware from "../middlewares/index";
import Controller from "../controllers/index";

const router: Router = Router();

router.post("/signup", Controller.createSp);

router.post("/signin", Controller.signinSp);

router.get("/get-service-provider", Controller.getSp);

router.get("/get-service-provider-by-id", Controller.getSpById);

router.put("/update-service-provider", [Middleware.tokenAuth, Middleware.spAuth], Controller.updateSp)

router.delete("/delete-service-provider",[Middleware.tokenAuth, Middleware.spAuth], Controller.deleteSp);

router.post("/create-service-provider-category",[ Middleware.tokenAuth, Middleware.adminAuth ], Controller.createSpCategory);

router.get("/get-service-provider-category", Controller.getSpCategory);

router.get("/get-service-provider-category-by-name", Controller.getSpCategoryById);

router.put("/update-service-provider-category",[ Middleware.tokenAuth, Middleware.adminAuth ], Controller.updateSpCategory);

router.delete("/delete-service-provider-category",[ Middleware.tokenAuth, Middleware.adminAuth ], Controller.deleteSpCategory);

export default router;
