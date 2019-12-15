const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const passport = require("passport");



// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");



router.post("/register", (req, res) => {

    const { errors, isValid, nameistleer, emailistleer, emailistungueltig, pwistleer, pwistzukurz, pwnummer, pwbistleer, pwgleich } = validateRegisterInput(req.body);

    //if (!isValid) {
    //    return res.status(400).json({ success: false, errors });
    //}

    if (nameistleer) {
        return res.status(400).json({ success: false, name: "Name ist ein Pflichtfeld!" });
    }

    if(emailistleer) {
        return res.status(400).json({ success: false, email: "E-Mail ist ein Pflichtfeld!" });
    }

    if(emailistungueltig){
        return res.status(400).json({ success: false, email: "E-Mail ist Ungültig!" });
    }

    if(pwistleer){
        return res.status(400).json({ success: false, password: "Passwort ist ein Pflichtfeld!" });
    }

    if(pwistzukurz){
        return res.status(400).json({ success: false, password: "Das Passwort ist zu kurz!" });
    }

    if(pwnummer){
        return res.status(400).json({ success: false, password: "Das Passwort muss mindestens eine Nummer enthalten!" });
    }

    if(pwbistleer){
        return res.status(400).json({ success: false, password2: "Passwort-Bestätigung ist ein Pflichtfeld!" });
    }

    if(pwgleich){
        return res.status(400).json({ success: false, password2: "Beide Passwörter müssen übereinstimmen!" });
    }

    User.findOne({ email: req.body.email }).then(user => {

        if (user) {
            return res.status(400).json({ success: false, email: "Email existiert bereits!" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });



            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post("/login", (req, res, response) => {

    const { errors, isValid,  emailistleer, emailistungueltig, pwistleer} = validateLoginInput(req.body);

    
    //if (!isValid) {
    //    return res.status(400).json({ success: false,  errors });
    //}

    //if (!(emailistleer == "")) {
    if(emailistleer){
        return res.status(400).json({ success: false,  email: "E-Mail ist ein Pflichtfeld!" });
    }

    if(emailistungueltig){
        return res.status(400).json({success: false, email: "E-Mail ist ungültig!"});
    }

    if(pwistleer){
        return res.status(400).json({success: false, password: "Passwort ist ein Pflichtfeld!"});
    }

    //if(emailistleer){
    //    return res.status(400).json({success:false, email: "TEST"});
    //}


    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(400).json({ success: false, emailnotfound: "Email wurde nicht gefunden!" });
        }


        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {

                const payload = {
                    id: user.id,
                    name: user.name
                };

                // Sign Token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 //1 Jahr
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            }

            else {
                return res
                    .status(400)
                    .json({ success: false, passwordincorrect: "Falsches Passwort!" });
            }
        });
    });


});

module.exports = router;