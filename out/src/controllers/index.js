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
const signup_1 = __importDefault(require("./user/signup"));
const signin_1 = __importDefault(require("./user/signin"));
const createJobPost_1 = __importDefault(require("./job/createJobPost"));
const getJobPost_1 = __importDefault(require("./job/getJobPost"));
const getJobPostById_1 = __importDefault(require("./job/getJobPostById"));
const updateJobPost_1 = __importDefault(require("./job/updateJobPost"));
const deleteJobPost_1 = __importDefault(require("./job/deleteJobPost"));
const createJobCategory_1 = __importDefault(require("./job/catagory/createJobCategory"));
const getJobCategory_1 = __importDefault(require("./job/catagory/getJobCategory"));
const getJobCategoryById_1 = __importDefault(require("./job/catagory/getJobCategoryById"));
const updateJobCategory_1 = __importDefault(require("./job/catagory/updateJobCategory"));
const deleteJobCategory_1 = __importDefault(require("./job/catagory/deleteJobCategory"));
const createNews_1 = __importDefault(require("./news/createNews"));
const getNews_1 = __importDefault(require("./news/getNews"));
const getNewsById_1 = __importDefault(require("./news/getNewsById"));
const updateNews_1 = __importDefault(require("./news/updateNews"));
const deleteNews_1 = __importDefault(require("./news/deleteNews"));
const createGrant_1 = __importDefault(require("./grant/createGrant"));
const getGrant_1 = __importDefault(require("./grant/getGrant"));
const getGrantById_1 = __importDefault(require("./grant/getGrantById"));
const updateGrant_1 = __importDefault(require("./grant/updateGrant"));
const deleteGrant_1 = __importDefault(require("./grant/deleteGrant"));
const createBlog_1 = __importDefault(require("./blog/createBlog"));
const getBlog_1 = __importDefault(require("./blog/getBlog"));
const getBlogById_1 = __importDefault(require("./blog/getBlogById"));
const updateBlog_1 = __importDefault(require("./blog/updateBlog"));
const deleteBlog_1 = __importDefault(require("./blog/deleteBlog"));
const createSp_1 = __importDefault(require("./service_provider/createSp"));
const getSp_1 = __importDefault(require("./service_provider/getSp"));
const getSpById_1 = __importDefault(require("./service_provider/getSpById"));
const updateSp_1 = __importDefault(require("./service_provider/updateSp"));
const deleteSp_1 = __importDefault(require("./service_provider/deleteSp"));
const login_1 = __importDefault(require("./service_provider/auth/login"));
const createCategory_1 = __importDefault(require("./service_provider/catagory/createCategory"));
const getCategory_1 = __importDefault(require("./service_provider/catagory/getCategory"));
const getCategoryById_1 = __importDefault(require("./service_provider/catagory/getCategoryById"));
const updateCategory_1 = __importDefault(require("./service_provider/catagory/updateCategory"));
const deleteCategory_1 = __importDefault(require("./service_provider/catagory/deleteCategory"));
var Controller;
(function (Controller) {
    Controller.addAdmin = addAdmin_1.default;
    Controller.adminLogin = adminLogin_1.default;
    Controller.getAdmins = getAdmins_1.default;
    Controller.confirmPassword = confirmPassword_1.default;
    Controller.adminProfileImgUpload = uploadProfileImg_1.default;
    // -- User -- //
    Controller.userSignup = signup_1.default;
    Controller.userSignin = signin_1.default;
    // -- Job post -- //
    Controller.insertJobPost = createJobPost_1.default;
    Controller.getJobPost = getJobPost_1.default;
    Controller.getJobPostById = getJobPostById_1.default;
    Controller.updateJobPost = updateJobPost_1.default;
    Controller.deleteJobPost = deleteJobPost_1.default;
    // -- Job category -- //
    Controller.insertJobCategory = createJobCategory_1.default;
    Controller.getJobCategory = getJobCategory_1.default;
    Controller.getJobCategoryById = getJobCategoryById_1.default;
    Controller.updateJobCategory = updateJobCategory_1.default;
    Controller.deleteJobCategory = deleteJobCategory_1.default;
    // -- News -- //
    Controller.createNews = createNews_1.default;
    Controller.getNews = getNews_1.default;
    Controller.getNewsById = getNewsById_1.default;
    Controller.updateNews = updateNews_1.default;
    Controller.deleteNews = deleteNews_1.default;
    // -- Grant -- //
    Controller.createGrant = createGrant_1.default;
    Controller.getGrant = getGrant_1.default;
    Controller.getGrantById = getGrantById_1.default;
    Controller.updateGrant = updateGrant_1.default;
    Controller.deleteGrant = deleteGrant_1.default;
    // -- Blog -- //
    Controller.createBlog = createBlog_1.default;
    Controller.getBlog = getBlog_1.default;
    Controller.getBlogById = getBlogById_1.default;
    Controller.updateBlog = updateBlog_1.default;
    Controller.deleteBlog = deleteBlog_1.default;
    // -- Service Provider -- //
    Controller.createSp = createSp_1.default;
    Controller.getSp = getSp_1.default;
    Controller.getSpById = getSpById_1.default;
    Controller.updateSp = updateSp_1.default;
    Controller.deleteSp = deleteSp_1.default;
    Controller.signinSp = login_1.default;
    Controller.createSpCategory = createCategory_1.default;
    Controller.getSpCategory = getCategory_1.default;
    Controller.getSpCategoryById = getCategoryById_1.default;
    Controller.updateSpCategory = updateCategory_1.default;
    Controller.deleteSpCategory = deleteCategory_1.default;
})(Controller || (Controller = {}));
exports.default = Controller;
// get all super admins
// get all admins
// update admin profile
// delete admin
// upload admin profile image, delete it and edit it
// verirfy password
