require("dotenv").config();
console.log(__dirname + "/.env");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const app = express();

app.use(express.static("public"));

const roomRouter = require("./routes/room.routes");
app.use("/", roomRouter);

app.use("/", router);

app.listen(4000, () => console.log("Server is up and running at port 4000"));
