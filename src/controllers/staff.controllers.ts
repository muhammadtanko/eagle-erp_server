import { StaffModel, IStaff } from "../models/staff.model";

class StaffController {
    constructor() { }

    async registerStaff(data: IStaff) {
        let staff = new StaffModel(data);
        let result = await staff.save();
        return result;
    }

    async getStaff(id: string) {
        let staff = await StaffModel.findById(id);
        return staff;
    }

    async getAllStaff() {
        let staff = await StaffModel.find();
        return staff;
    }

    async updateStaff(id: string, data: any) {
        let staff = await StaffModel.findByIdAndUpdate(id, data, { new: true })
        return staff
    }

    async deleteStaff(id: string) {
        let staff = await StaffModel.findByIdAndDelete(id);
        return staff
    }
}

export default new StaffController();