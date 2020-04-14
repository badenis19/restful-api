const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


router.get('/', (req,res) => {
    res.send('We are on Posts')
});

// To create new post
router.post('/',(req, res) => {
    // const post = {} 
    console.log(req.body)
})

module.exports = router;