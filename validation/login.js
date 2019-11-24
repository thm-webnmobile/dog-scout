const Validator = require("validator");
const isEmpty=require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors= {};

    data.email = !isEmpty(data.email) ? data.email:"";
    data.password = !isEmpty(data.password) ? data.password: "";

    if(Validator.isEmpty(data.email)){
        errors.email="E-Mail ist ein Pflichtfeld!";
    }else if(!Validator.isEmail(data.email)){
        errors.email="E-Mail ist ungültig!";
    }

    if(Validator.isEmpty(data.password)){
        errors.password="Password ist ein Pflichtfeld!";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };
};
