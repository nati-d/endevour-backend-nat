"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addAdmin_1 = __importDefault(require("./admin/addAdmin"));
const adminLogin_1 = __importDefault(require("./admin/adminLogin"));
const getAdmins_1 = __importDefault(require("./admin/getAdmins"));
const confirmPassword_1 = __importDefault(require("./admin/confirmPassword"));
const uploadProfileImg_1 = __importDefault(require("./admin/uploadProfileImg"));
const forgotPassword_1 = __importDefault(require("./admin/forgotPassword"));
const verifyForgotPassword_1 = __importDefault(require("./admin/verifyForgotPassword"));
const signup_1 = __importDefault(require("./user/signup"));
const createJobPost_1 = __importDefault(require("./job/createJobPost"));
const getJobPost_1 = __importDefault(require("./job/getJobPost"));
const updateJobPost_1 = __importDefault(require("./job/updateJobPost"));
const deleteJobPost_1 = __importDefault(require("./job/deleteJobPost"));
const createJobCategory_1 = __importDefault(require("./job/catagory/createJobCategory"));
const getJobCategory_1 = __importDefault(require("./job/catagory/getJobCategory"));
const createTenderCategory_1 = __importDefault(require("./tender/category/createTenderCategory"));
const updateTenderCategory_1 = __importDefault(require("./tender/category/updateTenderCategory"));
const deleteTenderCategory_1 = __importDefault(require("./tender/category/deleteTenderCategory"));
const getTenderCategory_1 = __importDefault(require("./tender/category/getTenderCategory"));
const getAllTenderCategories_1 = __importDefault(require("./tender/category/getAllTenderCategories"));
const deleteTender_1 = __importDefault(require("./tender/deleteTender"));
const createTender_1 = __importDefault(require("./tender/createTender"));
var Controller;
(function (Controller) {
    Controller.addAdmin = addAdmin_1.default;
    Controller.adminLogin = adminLogin_1.default;
    Controller.getAdmins = getAdmins_1.default;
    Controller.confirmPassword = confirmPassword_1.default;
    Controller.forgotPassword = forgotPassword_1.default;
    Controller.verifyForgotPassword = verifyForgotPassword_1.default;
    Controller.adminProfileImgUpload = uploadProfileImg_1.default;
    // -- Tender category --//
    Controller.createTenderCategory = createTenderCategory_1.default;
    Controller.updateTenderCategory = updateTenderCategory_1.default;
    Controller.deleteTenderCategory = deleteTenderCategory_1.default;
    Controller.getTenderCategory = getTenderCategory_1.default;
    Controller.getAllTenderCategories = getAllTenderCategories_1.default;
    // -- Tender --//
    Controller.createTender = createTender_1.default;
    Controller.deleteTender = deleteTender_1.default;
    // -- User -- //
    Controller.userSignup = signup_1.default;
    // -- Job post -- //
    Controller.insertJobPost = createJobPost_1.default;
    Controller.getJobPost = getJobPost_1.default;
    Controller.updateJobPost = updateJobPost_1.default;
    Controller.deleteJobPost = deleteJobPost_1.default;
    // -- Job category -- //
    Controller.insertJobCategory = createJobCategory_1.default;
    Controller.getJobCategory = getJobCategory_1.default;
})(Controller || (Controller = {}));
exports.default = Controller;
// get all super admins
// get all admins
// update admin profile
// delete admin
// upload admin profile image, delete it and edit it
// verirfy password
