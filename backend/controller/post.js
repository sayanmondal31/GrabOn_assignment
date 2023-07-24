const db = require("../db/db.json");

exports.createPost = async (req, res) => {
  try {
    if (req.body.title === "" || req.body.body === "") {
      res.status(400).json({ message: "Title and body are required" });
      return;
    }

    const post = {
      userId: Math.floor(Math.random() * 100),
      id: db.length + 1,
      title: req.body.title,
      body: req.body.body,
    };

    db.unshift(post);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = db;
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatepost = async (req, res) => {
  try {
    const post = db.find((post) => post.id === parseInt(req.params.id));
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    post.title = req.body.title ? req.body.title : post.title;
    post.body = req.body.body ? req.body.body : post.body;

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = db.find((post) => post.id === parseInt(req.params.id));
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    const index = db.indexOf(post);
    db.splice(index, 1);

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
