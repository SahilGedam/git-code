// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connection from "./Models/db";
import userRoutes from "./Routes/userRoutes";
var cors = require("cors");
const app: Express = express();

dotenv.config();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8080;

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
