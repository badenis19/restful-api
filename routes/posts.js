const express = require('express');
const router = express.Router();
const Post = require('../models/Post') // model, can use new post()



// VIEW ALL THE POSTS 
router.get('/', async (req, res) => {
  // console.log(res)
  try {
    const posts = await Post.find(); // Post.find() alone returns everything, use .limit(number) to filter result.
    return res.json(posts)
  } catch (err) {
    return res.json({ message: err })
  }
});

// CREATE NEW POST (CREATE)
router.post('/', async (req, res) => {
  // res.json({ test: "test"})
  console.log(res)
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save()
    console.log(savedPost)
    return res.json(savedPost)
  } catch (err) {
    console.log(err)
    return res.json({ message: err })
  }

});

// // VIEW ONE POST 
router.get("/:postId", async (req, res) => {
  console.log("post")
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId)
    return res.json(post)
  } catch (err) {
    console.log(err)
    res.json({ message: err })
  }
})




module.exports = router;

