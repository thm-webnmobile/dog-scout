const Validator = require("validator");
const isEmpty=require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors= {};
    //let emailistleer="";

    let emailistleer = false;
    let emailistungueltig= false;
    let pwistleer = false;

    data.email = !isEmpty(data.email) ? data.email:"";
    data.password = !isEmpty(data.password) ? data.password: "";

    if(Validator.isEmpty(data.email)){
        errors.email="E-Mail ist ein Pflichtfeld!"; //macht gerade nichts...
       // emailistleer="E-Mail ist ein Pflichtfeld"; //<--
        emailistleer=true;
    }else if(!Validator.isEmail(data.email)){
        errors.email="E-Mail ist ungültig!"; // macht gerade nichts...
        emailistungueltig=true;
    }

    if(Validator.isEmpty(data.password)){
        errors.password="Password ist ein Pflichtfeld!"; // ...
        pwistleer=true;
    }

    return{
        errors,
        isValid: isEmpty(errors),
        emailistleer,
        emailistungueltig,
        pwistleer
    };
};
