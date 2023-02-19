import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import userRouter from "./routes/users.js";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.listen(process.env.PORT || 5000, async () => {
  await Connection;
  console.log("server started at http://localhost:5000");
});
