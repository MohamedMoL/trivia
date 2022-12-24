import express from "express";

const profile_router = express.Router();

profile_router.get("/", (req, res) => {
  res.send("Profile works!!!");
});

export default profile_router;
