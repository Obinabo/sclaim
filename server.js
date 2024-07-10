const express = require("express");
const cors = require("cors");
const http = require('http');
const fs = require('fs'); // Re-added this line
const cron = require('node-cron');

const app = express();

var corsOptions = {
  // origin: "https://...app"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome." });
});

require("./app/routes/routes")(app);

const PORT = process.env.PORT || 8000;
http.createServer(app).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
