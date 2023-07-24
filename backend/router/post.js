const router = require("express").Router();
const {
  createPost,
  getPosts,
  updatepost,
  deletePost,
} = require("../controller/post");

router.route("/").post(createPost).get(getPosts);
router.route("/:id").patch(updatepost).delete(deletePost);

module.exports = router;
