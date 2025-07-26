require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const todosRouter = require("./routes/todos");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());


app.use("/api/todos", todosRouter);

app.get("/", (req, res) => {
  res.send("Todo List API with MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
