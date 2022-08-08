const express = require("express");
const controllers = require("./controllers");

const router = express.Router();

router.get("/users/:user/repos", controllers.getRepos);

module.exports = router;
