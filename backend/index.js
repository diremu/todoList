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
app.post("/todos", async (req,res) => {
  try {
    const {description, id} = req.body;
    const newTodo = await pool.query("INSERT INTO todo(todo_id, description) VALUES($1,$2) RETURNING *",[id, description])
    res.status(200).json(newTodo.rows)
    console.log(description, id)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error with posting data. Try again")
  }
})

app.listen(5000, () => {
  console.log("Connected to port 5000");
});
