import { Schema, model, Document } from "mongoose";
export  enum Gender {
    Male = "male",
    Female = "female"
}
interface Biodata {
    gender: Gender,
    dateOfBirth: Date
}
export interface IStaff extends Document {
    id: string,
    firstName: string,
    middleName: string,
    lastName: string,
    biodata: Biodata,
    dateOfEngagement: Date,

}
const StaffSchema: Schema = new Schema<IStaff>({
    id: { type: String, unique: true },
    firstName: { type: String},
    middleName: { type: String },
    lastName: { type: String },
    biodata: {
        gender: { type: String, enum: Object.values(Gender) },
        dateOfBirth: { type: Date },
    },
    dateOfEngagement: { type: Date }
})
export const StaffModel = model<IStaff>("Staff", StaffSchema);
// export default Staff;