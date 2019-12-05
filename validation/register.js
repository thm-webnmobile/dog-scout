const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    let pwlength = 2;
    const passwordRegex = /(?=.*[0-9])/;

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name ist ein Pflichtfeld!";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "E-Mail ist ein Pflichtfeld!";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "E-Mail ist ungültig!";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Passwort ist ein Pflichtfeld!";
    } else if (data.password.length < pwlength) {
        errors.password = "Das Passwort muss ist zu kurz!";
    } else if (!passwordRegex.test(data.password)) {
        errors.password = "Das Passwort muss mindestens eine Nummer enthalten!";
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Passwort-Bestätigung ist ein Pflichtfeld!";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Die Passwörter müssen übereinstimmen!";
    }

    return {
        errors,
        isValid: isEmpty(errors) //boolean: Ob es Fehler gibt
    };
};
