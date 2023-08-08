"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = async () => {
    const dbConn = mongoose_1.default.connection;
    dbConn
        .on("connected", () => {
        console.log("connected to mongo");
    })
        .on("disconnected", () => {
        console.log("connected to mongo");
        setTimeout(async () => {
            await mongoose_1.default.connect("mongodb://localhost:27017/staff");
        }, 3000);
    })
        .on("error", (error) => {
        console.log("error connecting to mongo", error.message);
    });
    try {
        mongoose_1.default.connect("mongodb://localhost:27017/staff");
    }
    catch (error) {
        console.log("error connecting to mongo", error.message);
    }
};
//# sourceMappingURL=mongo.conn.js.map