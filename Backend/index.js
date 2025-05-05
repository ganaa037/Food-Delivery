import express, { json } from "express";
import { connectMongoDB } from "./connectDb.js";
import { userRouter } from "./routes/user.js";
import cors from "cors";
import { categoryRouter } from "./routes/Categories.js";
import { foodRouter } from "./routes/food.js";
import { foodOrderRouter } from "./routes/foodOrder.js";

import { foodOrderItemRouter } from "./routes/foodOrderItem.js";
import { authRouter } from "./routes/auth.js";

const port = 3000;
const app = express();
connectMongoDB();

app.use(cors());
app.use(json());
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/food", foodRouter);
app.use("/foodOrder", foodOrderRouter);
app.use("/foodOrderItem", foodOrderItemRouter);
app.use("/", authRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
