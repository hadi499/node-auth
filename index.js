const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const bodyParser = require("body-parser");

// import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const { post } = require("./routes/auth");

dotenv.config();

//connect db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connect to db")
);

// app.use(bodyParser.json());

app.use(express.json());

//route middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => console.log("server up and running on port 3000"));
