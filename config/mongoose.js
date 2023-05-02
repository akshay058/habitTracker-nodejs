const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/habit-tracker", {
  useNewUrlParser: true, // to avoid warning
  useUnifiedTopology: true, // to avoid warning
});

const db = mongoose.connection; // storing connection

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Successfully connected to DB");
});
