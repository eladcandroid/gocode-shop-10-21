const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(express.static("client/build"));

const todoSchema = new mongoose.Schema({
  title: String,
  userId: Number,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

app.get("/api/todos", (req, res) => {
  const { title } = req.query;

  Todo.find((err, todos) => {
    if (title) {
      todos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    res.send(todos);
  });
});

app.get("/api/todos/:id", (req, res) => {
  const { id } = req.params;

  Todo.findById(id, (err, todo) => {
    res.send(todo);
  });
});

app.post("/api/todos", (req, res) => {
  const { title } = req.body;

  const todo = new Todo({ title, completed: false, userId: 1 });

  todo.save((err, todo) => {
    res.send(todo);
  });
});

app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, userId } = req.body;

  console.log(userId);

  Todo.findByIdAndUpdate(id, { title, userId }, { new: true }, (err, todo) => {
    res.send(todo);
  });
});

app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  Todo.findByIdAndDelete(id, (err, todo) => {
    if (err) {
      res.send("ID Not found");
    }
    res.send(todo);
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

const initTodos = () => {
  Todo.findOne((err, todo) => {
    if (!todo) {
      fs.readFile("./todos.json", "utf8", (err, data) => {
        const todos = JSON.parse(data);
        Todo.insertMany(todos, (err, todosRes) => {
          // res.send(todosRes);
        });
      });
    }
  });
};

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("err", err);
      console.log("Ani maazin!");
      initTodos();
    });
  }
);
