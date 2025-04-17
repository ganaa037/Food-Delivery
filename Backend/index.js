import express, { json } from "express";
import { connectMongoDB } from "./connectDb.js";
import { userRouter } from "./routes/user.js";
import cors from "cors";
import { categoryRouter } from "./routes/Categories.js";

const port = 8000;
const app = express();
connectMongoDB();

app.use(cors());
app.use(json());
app.use("/user", userRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
