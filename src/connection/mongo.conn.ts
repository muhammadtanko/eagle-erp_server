import mongoose from "mongoose";

export default async () => {
    const dbConn = mongoose.connection;
    dbConn
        .on("connected", () => {
            console.log("connected to mongo");
        })
        .on("disconnected", () => {
            console.log("connected to mongo");
            setTimeout(async () => {
                await mongoose.connect("mongodb://localhost:27017/staff")
            }, 3000)
        })
        .on("error", (error: any) => {
            console.log("error connecting to mongo", error.message);
        })
    try {
        mongoose.connect("mongodb://localhost:27017/staff")
    } catch (error: any) {
        console.log("error connecting to mongo", error.message);
    }
}