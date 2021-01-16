const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "post yang pertama",
      description: "oke bos kita tunggu",
    },
  });
});

module.exports = router;
