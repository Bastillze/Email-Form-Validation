let fields = {};

document.addEventListener("DOMContentLoaded", function () {
  fields.email = document.getElementById("email");
  fields.country = document.getElementById("country");
  fields.zipcode = document.getElementById("zipcode");
  fields.password = document.getElementById("password");
});

function isNotEmpty(value) {
  if (value == null || typeof value == "undefined") return false;

  return value.length > 0;
}

function isNumber(num) {
  return num.length > 0 && !isNaN(num);
}

function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function isPasswordValid(password) {
  if (password.length > 5) {
    return true;
  }
  return false;
}

function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value);
  if (!isFieldValid) {
    field.className = "placeholderRed";
  } else {
    field.className = "";
  }

  return isFieldValid;
}

function isValid() {
  var valid = true;

  valid &= fieldValidation(fields.email, isNotEmpty);
  valid &= fieldValidation(fields.country, isNotEmpty);
  valid &= fieldValidation(fields.zipcode, isNotEmpty);
  valid &= fieldValidation(fields.password, isPasswordValid);
  valid &= arePasswordsEqual();

  return valid;
}
