import express from "express";
import dotenv from "dotenv"
import taskRoute from "./routes/task.route.js"
import { databaseConnect } from "./lib/db.js";
import cors from "cors"

const app = express();

dotenv.config();
app.use(express.json())
const PORT = process.env.PORT;

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))

app.use("/api/task", taskRoute);

app.listen(PORT , ()=>{
    console.log(`localhost running on the --> http://localhost:${PORT}`)
    databaseConnect();
});