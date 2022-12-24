import express from "express";

const create_trivia_router = express.Router();

create_trivia_router.get("/", (req, res) => {
  res.send("Create trivia works!!!");
});

export default create_trivia_router;
