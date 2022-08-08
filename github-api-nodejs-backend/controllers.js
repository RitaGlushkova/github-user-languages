const { generateOptions } = require("./utils");
const https = require("https");

const getRepos = async function (req, res) {
  const user = req.params.user;
  let { per_page } = req.query;
  const options = generateOptions("/users/" + user + "/repos");

  https
    .get(options, function (apiResponse) {
      apiResponse.pipe(res);
    })
    .on("error", (e) => {
      console.log(e);
      res.status(500).send("User can't be found");
    });
};

const getLanguages = async function (req, res) {
  const user = req.params.user;
  const reponame = req.params.reponame;
  const options = generateOptions(
    "/repos/" + user + "/" + reponame + "/languages"
  );

  https
    .get(options, function (apiResponse) {
      apiResponse.pipe(res);
    })
    .on("error", (e) => {
      console.log(e);
      res.status(500).send("Oops something went wrong with requesting languages");
    });
};

module.exports = { getRepos, getLanguages };
