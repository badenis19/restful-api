const express = require('express');
const router = express.Router();
const Post = require('../models/Post') // model, can use new post()

router.get('/', (req, res) => {
  res.send('We are on Posts')
});

// To create new Post
router.post('/', (req, res) => {
  console.log(">>>", req.body);
  // console.log(">>>", req);
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  
  post.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err })
      console.log(err)
    });
});
 
module.exports = router;