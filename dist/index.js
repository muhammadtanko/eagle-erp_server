"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongo_conn_1 = __importDefault(require("./connection/mongo.conn"));
const staff_routes_1 = __importDefault(require("./routes/staff.routes"));
(0, mongo_conn_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1/staff", (0, staff_routes_1.default)());
app.listen(3000, () => {
    console.log("app listening on port 3000");
});
//# sourceMappingURL=index.js.map