const express = require("express");
const cors = require("cors");
const pool = require("./db.js");
const app = express();

app.use(cors());
app.use(express.json());

//get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todo");
    res.json(todos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//to create a todo
app.post("/todos", (req,res) => {
  try {
    const {description} = req.body;
    const newTodo = pool.query("INSERT INTO todo(description) VALUES($1) RETURNING *",[description])
    res.json(newTodo.rows).status(200)
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(5000, () => {
  console.log("Connected to port 5000");
});
