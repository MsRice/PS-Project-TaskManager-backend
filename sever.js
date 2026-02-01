require("dotenv").config();
require("./config/connection.js");

const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const userRouter = require("./routes/userRouter.js");
const taskRouter = require("./routes/taskRouter.js");

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(
    `Server is live. Coffee is pending, and port is live @  http://localhost:${PORT} ....Probably`,
  );
});
