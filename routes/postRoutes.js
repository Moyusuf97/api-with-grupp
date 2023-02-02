const express = require('express');
const router = express.Router();
const controller = require('../controllers/postcontroller')


  
router.get('/', controller.getAllPosts);
router.get('/:postid', controller.getPostByID);
router.post('/', controller.createPost);
router.delete('/:postid', controller.deletePost);
router.patch('/:postid', controller.updatePost);
  





module.exports = router; 