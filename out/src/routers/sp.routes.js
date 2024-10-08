"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("../middlewares/index"));
const index_2 = __importDefault(require("../controllers/index"));
const router = (0, express_1.Router)();
const routerPost = (0, express_1.Router)();
router.post("/signup", index_2.default.createSp);
router.post("/signin", index_2.default.signinSp);
router.get("/get-service-provider", index_1.default.tokenForAdmin, index_2.default.getSp);
router.get("/get-service-provider-by-id", index_2.default.getSpById);
router.put("/update-service-provider", [index_1.default.tokenAuth, index_1.default.spAuth], index_2.default.updateSp);
router.delete("/delete-service-provider", [index_1.default.tokenAuth, index_1.default.spAuth], index_2.default.deleteSp);
router.post("/create-service-provider-category", [index_1.default.tokenAuth, index_1.default.adminAuth], index_2.default.createSpCategory);
router.get("/get-service-provider-category", index_2.default.getSpCategory);
router.get("/get-service-provider-category-by-name", index_2.default.getSpCategoryById);
router.put("/update-service-provider-category", [index_1.default.tokenAuth, index_1.default.adminAuth], index_2.default.updateSpCategory);
router.delete("/delete-service-provider-category", [index_1.default.tokenAuth, index_1.default.adminAuth], index_2.default.deleteSpCategory);
routerPost.post("/create-post", [index_1.default.tokenAuth, index_1.default.spAuth], index_2.default.createSpPost);
routerPost.get("/get-post", index_2.default.getSpPost);
routerPost.get("/get-post-by-id", index_2.default.getSpPostById);
routerPost.put("/update-post", [index_1.default.tokenAuth, index_1.default.spAuth], index_2.default.updateSpPost);
routerPost.delete("/delete-post", [index_1.default.tokenAuth, index_1.default.spAuth], index_2.default.deleteSpPost);
router.use("/post", routerPost);
exports.default = router;
