import express from "express";

const register_router = express.Router();

register_router.get("/", (req, res) => {
  res.send("Register works!!!");
});

export default register_router;
