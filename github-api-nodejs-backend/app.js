const express = require("express");
const cors = require("cors");
const middlewares = require("./middlewares.js");
const app = express();
const PORT = process.env.PORT || 8080;;


app.use(express.json());
app.use(cors());
app.use(middlewares.setHeaders);

const routes = require("./routes");
app.get("/", (req, res) => {
  res.send("Welcome to Github NodeJS API app!");
});
app.use("/github_api", routes);
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
