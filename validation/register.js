const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

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
        errors.password="Passwort ist ein Pflichtfeld!";
    }

    if (Validator.isEmpty(data.password2)){
        errors.password2="Passwort-Bestätigung ist ein Pflichtfeld!";
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2="Die Passwörter müssen übereinstimmen!";
    }

    return{
        errors,
        isValid: isEmpty(errors) //boolean: Ob es Fehler gibt
    };
};
