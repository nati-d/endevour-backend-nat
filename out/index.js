"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./src/routers/index"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/user", index_1.default.user);
app.use("/api/admin", index_1.default.adminRoutes);
app.use("/api/job", index_1.default.job);
app.use("/api/tender", index_1.default.tender);
app.use("/api/news", index_1.default.news);
app.use("/api/grant", index_1.default.grant);
app.use("/api/grant", index_1.default.grant);
app.use("/api/exclusive-job", index_1.default.exclusiveJob);
app.use("/api/common", index_1.default.common);
app.use("/api/blog", index_1.default.blog);
const port = 3000;
app.listen(port, () => console.log("Server started at port", port));
