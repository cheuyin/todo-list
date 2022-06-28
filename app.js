const express = require("express");
const bodyParser = require("body-parser");
const getDate = require(__dirname + "/date.js");

let items = [];
let workItems = [];

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const date = getDate();
  res.render("list", {listTitle: date, listItems: items});
});

app.post("/", (req, res) => {
  const item = req.body.todoItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work")
  } else {
    items.push(item)
    res.redirect("/");
  }
})

app.get("/work", (req, res) => {
  res.render("list", {listTitle: "Work List", listItems: workItems})
});

app.post("/work", (req, res) => {
  let workItem = req.body.newItem;
  workItems.push(workItem);
  res.redirect("/")
});

app.get("/about", (req, res) => {
  res.render("about");
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
})