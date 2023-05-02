const express = require("express");
const connectDB = require("./config/mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;
const corsOptions = {
  origin: "*",
};
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

app.use(cors(corsOptions));

app.listen(port, () => {
  console.log("Server Running at 8000");
});
