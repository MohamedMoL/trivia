import express from "express";

const login_router = express.Router();

login_router.get("/", (req, res) => {
  res.send("Login works!!!");
});

export default login_router;
