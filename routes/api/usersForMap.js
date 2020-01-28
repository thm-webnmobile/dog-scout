const express = require("express");
const router = express.Router();

// Load User model
const User = require("../../models/User");

router.get("/", (req, res) => {
  User.find().then(users => res.json(users));
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id).then(user => res.json(user));
});

router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    alter: req.body.alter,
    wohnort: req.body.wohnort,
    bild: req.body.bild,
    beschreibung: req.body.beschreibung,
    location: req.body.location
  });

  newUser.save().then(user => res.json(user));
});

module.exports = router;
