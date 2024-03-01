import express from "express";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
// import "./DB/connection.js";

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("<code>Welcome to ProMage app</code> ");
});



app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});