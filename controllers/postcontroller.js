const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  try {
    res.json(await Post.find());
  } catch (error) {
    res.json({ message: error });
  }
};
exports.getPostByID = async (req, res) => {
  try {
    res.json(await Post.findById(req.params.postid));
  } catch (error) {
    res.json({ message: error });
  }
};
exports.createPost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      Description: req.body.Description,
      Price: req.body.Price,
      Stock: req.body.Stock,
      Image: req.body.Image,
      Category: req.body.Category,
      Image: req.body.Image



    })

    
    res.json(await post.save());
  } catch (error) {
    res.json({ message: error });
  }



};


exports.deletePost = async (req, res) => {
  try {
    res.json(await Post.deleteOne({'_id': req.params.postid}));
  } catch (error) {
    res.json({ message: error });
  }

};

exports.updatePost = async (req, res) => {
  try {
    res.json(await Post.updateOne(
      {'_id': req.params.postid},
      {
        $set: {
          title: req.body.title,
          Description: req.body.Description,
          Price: req.body.Price,
          Stock: req.body.Stock,
          Image: req.body.Image,
          Category: req.body.Category,
          Image: req.body.Image

        }
      }
      
      ));
  } catch (error){
    res.json({message: error });
  }
};