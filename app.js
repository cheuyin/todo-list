const express = require("express");
const bodyParser = require("body-parser");
let items = [];

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const today = new Date();
  const dateFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  const day = today.toLocaleDateString("en-US", dateFormatOptions)

  res.render("list", {date: day, listItems: items});
});

app.post("/", (req, res) => {
  const item = req.body.todoItem;
  items.push(item);
  res.redirect("/");
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
})