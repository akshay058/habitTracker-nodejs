const express = require("express");
const connectDB = require("./config/mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/assets", express.static("./assets"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error in connecting", err);
    return;
  }
  console.log("Server Running at port", port);
});
