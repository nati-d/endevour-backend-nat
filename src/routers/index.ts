import _user from "./user.routes";
export * from "./user.routes";
import _admin from "./admin.routes";
import _job from "./job.routes";
import _tender from "./tender.routes";
import _news from "./news.routes";
import _exclusiveJob from "./exclusiveJob.routes";

import _common from "./common.routes";
import _grant from "./grant.routes";
import _blog from "./blog.routes";
import _sp from "./sp.routes";
import _tag from "./tag.routes";
import _auth from "./auth";
import _home from "./home";

import _verification from "./verification.routes";

import _customerFeadback from "./contactUs.routes";
import _personalizedAlert from "./personalizedAlert.routes";

namespace Routers {
  export const adminRoutes = _admin;
  export const user = _user;
  export const job = _job;
  export const tender = _tender;
  export const news = _news;
  export const exclusiveJob = _exclusiveJob;
  export const common = _common;
  export const grant = _grant;
  export const blog = _blog;
  export const sp = _sp;
  export const tag = _tag;
  export const auth = _auth;
  export const home = _home;
  export const verification = _verification;
  export const customerFeadback = _customerFeadback;
  export const personalizedAlert = _personalizedAlert;
}

export default Routers;
