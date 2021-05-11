require("dotenv").config();
console.log(__dirname + "/.env");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ origin: "http://localhost:3000" }));

const db = require("./config/db.config.js");
db();

const router = require("./routes/index.routes");
app.use("/", router);

const roomRouter = require("./routes/room.routes");
app.use("/", roomRouter);

const reviewRouter = require("./routes/review.routes");
app.use("/", reviewRouter);

app.listen(Number(process.env.PORT), () =>
  console.log(`Server up and running at port ${process.env.PORT}`)
);
