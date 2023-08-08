"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffModel = exports.Gender = void 0;
const mongoose_1 = require("mongoose");
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (exports.Gender = Gender = {}));
const StaffSchema = new mongoose_1.Schema({
    id: { type: String, unique: true },
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
    biodata: {
        gender: { type: String, enum: Object.values(Gender) },
        dateOfBirth: { type: Date },
    },
    dateOfEngagement: { type: Date }
});
exports.StaffModel = (0, mongoose_1.model)("Staff", StaffSchema);
// export default Staff;
//# sourceMappingURL=staff.model.js.map