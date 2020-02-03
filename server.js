const express = require("express");
const mongoose = require("mongoose");

// Für File-Upload:
var multer = require('multer');
var fs = require("fs-extra");
var Schema = mongoose.Schema;
const MongoClient = require('mongodb').MongoClient 
const myurl = 'mongodb://localhost:27017';

// mongoose.startSession('useCreateIndex', true); //wegen DeprecationWarning -> aber kam FM
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors"); //?
const passport = require("passport");
const users = require("./routes/api/users");
const usersForMap = require("./routes/api/usersForMap");
const usersTestRoute = require("./routes/usersTest"); //nhi: nur vorübergehend zu Testzwecken!

//The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value
mongoose.Promise = global.Promise;


app.use(cors()); //??

//Bodyparser Middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());


//File-Upload:
app.get('/',function(req,res){
  res.sendFile(__dirname + '/profilseite.js');
 
});
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })





// DB Config
const db = require("./config/keys").mongoURI;



//Connect to Mongo
//!!!
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => consolee.log(err));

  /*var cursor= db.users.find() //collection=?
  var objectId= cursor.next()._id
  console.log("ID:"+objectId)*/


  /*MongoClient.connect(myurl, (err, client) => {
    if (err) return console.log(err)
    db = client.db('test') 
    app.listen(5000, () => {
      console.log('listening on 5000')
    })
  })*/



//File-Upload: Pfadreferenz:
 //app.use("/uploads", expresss.static("uploads"));




//Passport middleware
app.use(passport.initialize());

//Passpot config
require("./config/passport")(passport);

app.use("/users", usersTestRoute); //nhi: nur vorübergehend zu Testzwecken!
app.use("/api/users", users);
app.use("/api/usersForMap", usersForMap);

const port = process.env.PORT || 5000;


//!!!
app.listen(port, () => console.log(`Server started on port ${port}`));


//File-Upload:

app.post('/uploadphoto', upload.single('picture'), (req, res) => {
  var img = fs.readFileSync(req.file.path);
var encode_image = img.toString('base64');
// Define a JSONobject for the image attributes for saving to database

var finalImg = {
    contentType: req.file.mimetype,
    image:  new Buffer(encode_image, 'base64')
 };
db.collection('users').insertOne(finalImg, (err, result) => {
  console.log(result)

  if (err) return console.log(err)

  console.log('saved to database')
  res.redirect('/')
 
   
})
})

app.get('/photos', (req, res) => {
  db.collection('users').find().toArray((err, result) => {
   
        const imgArray= result.map(element => element._id);
              console.log(imgArray);
   
     if (err) return console.log(err)
     res.send(imgArray)
   
    })
  });

  
  app.get('/photo/:id', (req, res) => {
    var filename = req.params.id;
    
    db.collection('users').findOne({'_id': ObjectId(filename) }, (err, result) => {
    
        if (err) return console.log(err)
    
       res.contentType('image/jpeg');
       res.send(result.image.buffer)
      
       


      })


    })