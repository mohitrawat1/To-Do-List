import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const d = new Date();
  const date = d.toDateString();
  res.render("index.ejs", { dateAndTime: date });
});


app.post("/add-task", (req, res) => {
  const taskText = req.body.taskText;


  res.json({ success: true, message: "Task added successfully!" });
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}.`);
});
