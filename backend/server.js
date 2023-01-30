const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
var custumerController = require("./controllers/custumerController");
var professionalController = require("./controllers/professionalController");
var bookController = require("./controllers/bookController");

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use("/custumers", custumerController);
app.use("/professionals", professionalController);
app.use("/book", bookController);

app.listen(3000, () => {
  console.log("server is running...");
});
