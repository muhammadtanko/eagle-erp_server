"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const staff_controllers_1 = __importDefault(require("../controllers/staff.controllers"));
const api = (0, express_1.Router)();
exports.default = () => {
    api.get("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let staff = await staff_controllers_1.default.getStaff(id);
            res.status(200).json({ ok: true, payload: staff });
        }
        catch (error) {
            res.status(500).json({ ok: false, error: error.message });
        }
    });
    api.get("/", async (req, res) => {
        try {
            let staff = await staff_controllers_1.default.getAllStaff();
            res.status(200).json({ ok: true, payload: staff });
        }
        catch (error) {
            res.status(500).json({ ok: false, error: error.message });
        }
    });
    api.put("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let data = req.body;
            let staff = await staff_controllers_1.default.updateStaff(id, data);
            res.status(200).json({ ok: true, payload: staff });
        }
        catch (error) {
            res.status(500).json({ ok: false, error: error.message });
        }
    });
    api.post("/", async (req, res) => {
        try {
            let data = req.body;
            console.log("data>>", data);
            let newStaff = await staff_controllers_1.default.registerStaff(data);
            console.log("new staff>>", newStaff);
            res.status(200).json({ ok: true, payload: newStaff });
        }
        catch (error) {
            res.status(200).json({ ok: false, payload: error.message });
        }
    });
    api.delete("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let deletedStaff = await staff_controllers_1.default.deleteStaff(id);
            res.status(200).json({ ok: true, payload: `user with ${deletedStaff === null || deletedStaff === void 0 ? void 0 : deletedStaff.id} has been deleted` });
        }
        catch (error) {
            res.status(500).json({ ok: false, error: error.message });
        }
    });
    return api;
};
//# sourceMappingURL=staff.routes.js.map