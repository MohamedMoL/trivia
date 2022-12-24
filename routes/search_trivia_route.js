import express from "express";

const search_trivia_router = express.Router();

search_trivia_router.get("/", (req, res) => {
  res.send("Search trivia works!!!");
});

export default search_trivia_router;
