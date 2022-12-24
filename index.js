import express from "express";

// ROUTERS IMPORTS
import create_trivia_router from "./routes/create_trivia_route.js";
import home_router from "./routes/home_route.js";
import login_router from "./routes/login_route.js";
import profile_router from "./routes/profile_route.js";
import search_trivia_router from "./routes/search_trivia_route.js";
import register_trivia_router from "./routes/register_route.js";

// APP CONFIGURATION
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// APP ROUTERS
app.use("/trivia_creator", create_trivia_router);
app.use("/home", home_router);
app.use("/login", login_router);
app.use("/register", register_trivia_router);
app.use("/search_trivia", search_trivia_router);
app.use("/profile", profile_router);

app.get("/", (req, res) => {
  res.send("It works!!!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
