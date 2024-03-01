import express from "express";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config({ path: ".env" })
import "./db/connection.js";
import { projectRoute, taskRoute, userRoute } from "./routes/index.js";

const PORT = process.env.DEVELOPMENT_PORT;

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("<code>Welcome to ProMage app</code> ");
});

app.use(userRoute)
app.use(projectRoute)
app.use(taskRoute)

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});