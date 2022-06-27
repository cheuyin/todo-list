const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
  const today = new Date();
  const dateFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  const day = today.toLocaleDateString("en-US", dateFormatOptions)

  res.render("list", {date: day});
});

app.post("/", (req, res) => {
  console.log(req.body.todoItem)
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
})