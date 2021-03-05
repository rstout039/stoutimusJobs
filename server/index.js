const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const todoRoutes = require("./route")
// const cookieParser = require("cookie-parser");
// const PORT = process.env.PORT || 3001;
// app.use(cookieParser());
// app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }  

mongoose.connect("mongodb://localhost/stoutimusJobs", { useNewUrlParser: true, useUnifiedTopology: true }, () =>{
});

const app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.use("/api/todos", todoRoutes);

// const userRouter = require("./routes/User.js");
// app.use("/user", userRouter);

app.listen(5000, () => console.log("Server is running on prt 5000"));
  