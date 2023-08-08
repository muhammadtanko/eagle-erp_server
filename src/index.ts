import express, { Express } from "express";
import cors from "cors";
import conn from "./connection/mongo.conn"
conn()
const app: Express = express()
app.use(cors())
app.use(express.json())
app.use(express)