import _addAdmin from "./admin/addAdmin";
import _adminLogin from "./admin/adminLogin";
import _getAdmins from "./admin/getAdmins";
import _confirmPassword from "./admin/confirmPassword";
import _adminProfileImgUpload from "./admin/uploadProfileImg";

import _userSignup from "./user/signup";
import _userSignin from "./user/signin";
import _saved from "./user/saved";

import _insertJobPost from "./job/createJobPost";
import _getJobPost from "./job/getJobPost";
import _getJobPostById from "./job/getJobPostById";
import _updateJobPost from "./job/updateJobPost";
import _deleteJobPost from "./job/deleteJobPost";

import _insertJobCategory from "./job/catagory/createJobCategory";
import _getJobCategory from "./job/catagory/getJobCategory";
import _getJobCategoryById from "./job/catagory/getJobCategoryById";
import _updateJobCategory from "./job/catagory/updateJobCategory";
import _deleteJobCategory from "./job/catagory/deleteJobCategory";

import _createNews from "./news/createNews";
import _getNews from "./news/getNews";
import _getNewsById from "./news/getNewsById";
import _updateNews from "./news/updateNews";
import _deleteNews from "./news/deleteNews";

import _getPostUrl from "./common/getPostUrl";
import _createGrant from "./grant/createGrant";
import _getGrant from "./grant/getGrant";
import _getGrantById from "./grant/getGrantById";
import _updateGrant from "./grant/updateGrant";
import _deleteGrant from "./grant/deleteGrant";

import _createBlog from "./blog/createBlog";
import _getBlog from "./blog/getBlog";
import _getBlogById from "./blog/getBlogById";
import _updateBlog from "./blog/updateBlog";
import _deleteBlog from "./blog/deleteBlog";

import _createSp from "./service_provider/createSp";
import _getSp from "./service_provider/getSp";
import _getSpById from "./service_provider/getSpById";
import _updateSp from "./service_provider/updateSp";
import _deleteSp from "./service_provider/deleteSp";
import _signinSp from "./service_provider/auth/login";

import _createSpCategory from "./service_provider/catagory/createCategory";
import _getSpCategory from "./service_provider/catagory/getCategory";
import _getSpCategoryById from "./service_provider/catagory/getCategoryById";
import _updateSpCategory from "./service_provider/catagory/updateCategory";
import _deleteSpCategory from "./service_provider/catagory/deleteCategory";

import _createSpPost from "./service_provider/post/createPost";
import _getSpPost from "./service_provider/post/getPost";
import _getSpPostById from "./service_provider/post/getPostById";
import _updateSpPost from "./service_provider/post/updatePost";
import _deleteSpPost from "./service_provider/post/deletePost";

namespace Controller {
    export const addAdmin = _addAdmin;

    export const adminLogin = _adminLogin;

    export const getAdmins = _getAdmins;

    export const confirmPassword = _confirmPassword;

    export const adminProfileImgUpload = _adminProfileImgUpload;

    // -- User -- //
    export const userSignup = _userSignup;

    export const userSignin = _userSignin;

    export const saved = _saved;
    // -- Job post -- //
    export const insertJobPost = _insertJobPost;

    export const getJobPost = _getJobPost;

    export const getJobPostById = _getJobPostById;

    export const updateJobPost = _updateJobPost;

    export const deleteJobPost = _deleteJobPost;

    // -- Job category -- //
    export const insertJobCategory = _insertJobCategory;

    export const getJobCategory = _getJobCategory;

    export const getJobCategoryById = _getJobCategoryById;

    export const updateJobCategory = _updateJobCategory;

    export const deleteJobCategory = _deleteJobCategory;
    // -- News -- //
    export const createNews = _createNews;

    export const getNews = _getNews;

    export const getNewsById = _getNewsById;

    export const updateNews = _updateNews;

    export const deleteNews = _deleteNews;

    // -- Grant -- //
    export const createGrant = _createGrant;

    export const getGrant = _getGrant;

    export const getGrantById = _getGrantById;

    export const updateGrant = _updateGrant;

    export const deleteGrant = _deleteGrant;

    // -- Blog -- //
    export const createBlog = _createBlog;

    export const getBlog = _getBlog;

    export const getBlogById = _getBlogById;

    export const updateBlog = _updateBlog;

    export const deleteBlog = _deleteBlog;

    // -- Service Provider -- //

    export const createSp = _createSp;

    export const getSp = _getSp;

    export const getSpById = _getSpById;

    export const updateSp = _updateSp;

    export const deleteSp = _deleteSp;

    export const signinSp = _signinSp;

    export const createSpCategory = _createSpCategory;

    export const getSpCategory = _getSpCategory

    export const getSpCategoryById = _getSpCategoryById;

    export const updateSpCategory = _updateSpCategory;

    export const deleteSpCategory = _deleteSpCategory;

    export const createSpPost = _createSpPost;

    export const getSpPost = _getSpPost;

    export const getSpPostById = _getSpPostById;

    export const updateSpPost = _updateSpPost;

    export const deleteSpPost = _deleteSpPost;
}

export default Controller;
// get all super admins
// get all admins
// update admin profile
// delete admin
// upload admin profile image, delete it and edit it
// verirfy password
