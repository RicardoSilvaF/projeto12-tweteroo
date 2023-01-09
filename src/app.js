import express from "express";
import cors from "cors";

const server = express()
server.use(express.json())
server.use(cors());

let newUser = {
};
let arrayTweets = [{
  username: "",
  avatar: "",
  tweet: ""
}];
// SERVER SIGN UP 
let users = [];

server.post("/sign-up", (req, res) => {
  newUser = req.body;
  if(arrayTweets.length > 0){
    if(arrayTweets[0].username != newUser.username){
      arrayTweets = [];
    }
  }
  res.send("OK")
})
// SERVER SIGN UP

// SERVER TWEETS
server.post("/tweets", (req, res) => {
  if(Object.keys(newUser).length === 0){
    res.send("UNAUTHORIZED")
  }
  else{
    let tweet = {
      username: newUser.username,
      avatar: newUser.avatar,
      tweet: req.body.tweet
    };
    if(arrayTweets.length == 10){
      arrayTweets.shift();
    }
    arrayTweets.push(tweet);
    res.send("OK");
  }
})

server.get("/tweets", (req,res) => {
  res.send(arrayTweets);
})
// SERVER TWEETS

server.listen(5000, () => {
}) 
