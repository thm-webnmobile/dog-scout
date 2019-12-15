const express = require("express");
const mongoose = require("mongoose");
// mongoose.startSession('useCreateIndex', true); //wegen DeprecationWarning -> aber kam FM
const bodyParser = require("body-parser"); 
const app = express();
const cors = require('cors'); //?
const passport = require("passport");
const users = require("./routes/api/users");

//The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value
mongoose.Promise=global.Promise;

app.use(cors()); //??
 
//Bosyparser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log("MongoDB connected!"))
.catch(err=>consolee.log(err));

//Passport middleware
app.use(passport.initialize());

//Passpot config
require("./config/passport")(passport);

app.use("/api/users", users);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));



