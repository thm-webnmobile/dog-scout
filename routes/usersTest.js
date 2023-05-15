/**
 * Das ist nur eine vorübergehnde Datei, wird gelöscht sobald sich die Userdaten in der Datenbank befinden.
 */

const express = require("express");
const users = require("../test_db/UsersInTestDB");

const app = express.Router();

// Item Model
let User = require("../models/user.model");

// @route   GET /users
// @desc    Get All Users
// @access  Public
app.get("/", async (request, response) => {
  response.json(users);

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }

  /* User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err)); */
});

module.exports = app;
