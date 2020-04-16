const express = require('express');
const router = express.Router();
const Post = require('../models/Post') // model, can use new post()


// VIEW ALL THE POSTS 
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find(); // Post.find() alone returns everything, use .limit(number) to filter result.
    console.log("Posts displayed")
    console.log(posts)
    return res.json(posts)
  } catch (err) {
    return res.json({ message: err })
  }
});

// VIEW ONE POST 
router.get("/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId)
    return res.json(post)
  } catch (err) {
    return res.json({ message: err })
  }
})


// CREATE NEW POST (CREATE)
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save()
    return res.json(savedPost)
  } catch (err) {
    return res.json({ message: err })
  }

});

// UPDATE POST 
router.patch('/:postId', async (req, res) => {
  try {
    const postId = req.params.postId
    const updatedPost = await Post.updateOne(
      { _id: postId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description
        }
      }
    )

    return res.json({ updatedPost })

  } catch (err) {
    return res.json({ message: err })
  }

});

// DELETE POST
router.delete("/:postId", async (req, res) => {
  try {
    postId = req.params.postId
    const removedPost = await Post.remove({ _id: postId })
    res.json({ message: removedPost })
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router;

