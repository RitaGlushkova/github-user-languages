const express = require("express");
const controllers = require("./controllers");

const router = express.Router();

router.get("/users/:user/repos", controllers.getRepos);

router.get("/repos/:user/:reponame/languages", controllers.getLanguages);

module.exports = router;
