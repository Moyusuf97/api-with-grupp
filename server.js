require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use(cors())
app.use(helmet())
const postRouter = require("./routes/postRoutes");
app.use("/posts", verifyToken, postRouter);

const apiUserRouter = require("./routes/apiUsers");
app.use("/api-user", apiUserRouter);  

function verifyToken (req, res, next){
  const bearer = req.headers['authorization'];
  const token = bearer && bearer.split(' ')[1]

  if (!token) {
     return res.sendStatus(401)

  }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
      if (error) {
        return res.sendStatus(403);
      }
      next(); 
    })
  }



mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.DB_URL, 
{ useNewUrlParser: true, useUnifiedTopology: true },
() => {
  console.log("DB connected");
}
)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});




