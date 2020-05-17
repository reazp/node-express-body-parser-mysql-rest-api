//index.js
const express = require("express");
var bodyParser = require("body-parser");
const app = express();

// parse application/json
app.use(bodyParser.json());

const contactsRouter = require("./routes/contacts");

app.use("/contacts", contactsRouter);

app.listen(3000);
console.log("server started");
