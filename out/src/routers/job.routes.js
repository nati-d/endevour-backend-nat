"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../middlewares/index"));
const index_2 = __importDefault(require("../controllers/index"));
const router = express_1.default.Router();
router.post("/insert-job-catagory", [index_1.default.tokenAuth, index_1.default.adminAuth], index_2.default.insertJobCatagory);
router.post("/post-job", [index_1.default.tokenAuth, index_1.default.adminAuth], index_2.default.insertJobPost);
router.put("/update-job-post", [index_1.default.tokenAuth, index_1.default.adminAuth], index_2.default.updateJobPost);
router.delete("/delete-job-post", [index_1.default.tokenAuth, index_1.default.adminAuth], index_2.default.deleteJobPost);
exports.default = router;
