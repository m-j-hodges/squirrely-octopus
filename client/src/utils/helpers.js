export function validateEmail(email) {
  const checkEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return checkEmail.test(String(email).toLowerCase());
}

export function toLower(str) {
  var arrStr = Array.from(str);
  var res = arrStr.map((ele) => {
    return ele.toLowerCase()
  })
  return res.join("");

}

export function validateFieldsLength(fields) {
  var isValid = false;

  if (fields.length) {
    fields.forEach((value, i) => {
      value.length > 0 ? (isValid = true) : (isValid = false);
    });

    return isValid;
  }
}

export function checkInputLength(input) {
  if (input.count > 0) {
    return true;
  } else {
    return false;
  }
}
