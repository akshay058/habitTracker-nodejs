const mongoose = require("mongoose");
const URI = process.env.MONGO_ATLAS_CONNECTION;
mongoose.connect(URI, {
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
