import express, { Express } from "express";
import cors from "cors";
import conn from "./connection/mongo.conn"
import staffRoutes from "./routes/staff.routes";
conn();
const app: Express = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/staff",staffRoutes())
app.listen(3000,()=>{
    console.log("app listening on port 3000");
})