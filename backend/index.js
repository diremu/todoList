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
app.post("/todos", async (req, res) => {
  try {
    const { description, id } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo(todo_id, description) VALUES($1,$2) RETURNING *",
      [id, description]
    );
    res.status(200).json(newTodo.rows);
    console.log(description, id);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error with posting data. Try again");
  }
});

app.put("/todos", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.status(200).json("Todo was updated");
  } catch (error) {
    console.error(error.message)
  }
});

app.listen(5000, () => {
  console.log("Connected to port 5000");
});
