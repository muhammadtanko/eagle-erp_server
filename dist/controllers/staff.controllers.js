"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const staff_model_1 = require("../models/staff.model");
class StaffController {
    constructor() { }
    async registerStaff(data) {
        let staff = new staff_model_1.StaffModel(data);
        let result = await staff.save();
        console.log("result", result);
        return result;
    }
    async getStaff(id) {
        let staff = await staff_model_1.StaffModel.findById(id);
        return staff;
    }
    async getAllStaff() {
        let staff = await staff_model_1.StaffModel.find();
        return staff;
    }
    async updateStaff(id, data) {
        let staff = await staff_model_1.StaffModel.findByIdAndUpdate(id, data, { new: true });
        return staff;
    }
    async deleteStaff(id) {
        let staff = await staff_model_1.StaffModel.findByIdAndDelete(id);
        return staff;
    }
}
exports.default = new StaffController();
//# sourceMappingURL=staff.controllers.js.map