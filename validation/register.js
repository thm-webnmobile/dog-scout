// Sarahs Code
const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    let pwlength = 2;
    const passwordRegex = /(?=.*[0-9])/;

    let {nameistleer, emailistleer, emailistungueltig, pwistleer, pwistzukurz, pwnummer, pwbistleer, pwgleich }= false;

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name ist ein Pflichtfeld!"; // macht gerade nichts.. (Siehe routes/api/users.js)
        nameistleer = true;
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "E-Mail ist ein Pflichtfeld!";
        emailistleer=true;
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "E-Mail ist ungültig!";
        emailistungueltig=true;
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Passwort ist ein Pflichtfeld!";
        pwistleer=true;
    } else if (data.password.length < pwlength) {
        errors.password = "Das Passwort ist zu kurz!";
        pwistzukurz=true;
    } else if (!passwordRegex.test(data.password)) {
        errors.password = "Das Passwort muss mindestens eine Nummer enthalten!";
        pwnummer=true;
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Passwort-Bestätigung ist ein Pflichtfeld!";
        pwbistleer=true;
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Die Passwörter müssen übereinstimmen!";
        pwgleich=true;
    }

    return {
        errors,
        isValid: isEmpty(errors), //boolean: Ob es Fehler gibt
        nameistleer, emailistleer, emailistungueltig, pwistleer, pwistzukurz, pwnummer, pwbistleer, pwgleich
    };
};
