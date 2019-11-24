const express = require("express");
const mongoose = require("mongoose");
// mongoose.startSession('useCreateIndex', true); //wegen DeprecationWarning -> aber kam FM
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");
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
/*mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));
*/

// Use Routes
//*app.use("/users", usersRouter);
//app.use(bodyParser.json()); -> war doppelt

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));



//Zugriff auf todo.model.js:
let Todo=require('./todo.model');
const todoRoutes=express.Router();
app.use('/todos', todoRoutes);
todoRoutes.route('/').get(function(req, res){
  Todo.find(function(err,todos){ //Liste aller Items der MongoDB datenbank
    if(err){
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

todoRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Todo.findById(id, function(err, todo) {
      res.json(todo);
  });
});

todoRoutes.route('/add').post(function(req, res) {
  let todo = new Todo(req.body);
  todo.save()
      .then(todo => {
          res.status(200).json({'todo': 'todo added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new todo failed');
      });
});

todoRoutes.route('/update/:id').post(function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
      if (!todo)
          res.status(404).send("data is not found");
      else
          todo.todo_description = req.body.todo_description;
          todo.todo_responsible = req.body.todo_responsible;
          todo.todo_priority = req.body.todo_priority;
          todo.todo_completed = req.body.todo_completed;

          todo.save().then(todo => {
              res.json('Todo updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});