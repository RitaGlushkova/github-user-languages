const { generateOptions } = require("./utils");
const https = require("https");

const getRepos = async function (req, res) {
  const user = req.params.user;
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

module.exports = { getRepos };
