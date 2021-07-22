const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");

/*
make dotenv ready to use
 */
dotenv.config();

// DB connection via mongoose
mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
    console.log("connected to MongoDB")
});

// middleware

app.use(express.json());  // a body parser for get method
app.use(helmet());
app.use(morgan("common"));

// app.get("/",(req,res) => {
//     res.send("Welcome to homepage")
// })

app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);

app.listen(8080,()=> {
    console.log("Backend server started successfully on 8080")
})