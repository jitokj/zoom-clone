const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const server = require("http").Server(app);
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:roomId", (req, res) => {
  res.render("room", { roomId: req.params.roomId });
});

server.listen(3000, () => {
  console.log("connected");
});
