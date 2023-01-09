import express from "express";
import cors from "cors";

const server = express()
server.use(express.json())
server.use(cors());

let newUser = {
};
let arrayTweets
// SERVER SIGN UP 
let users = [];

server.get("/sign-up", (req,res) => {
  
})

server.post("/sign-up", (req, res) => {
  
})
// SERVER SIGN UP

// SERVER TWEETS
server.post("/tweets", (req, res) => {
  
})

server.get("/tweets", (req,res) => {

})
// SERVER TWEETS




server.listen(5000, () => {
}) 
