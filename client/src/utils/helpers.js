export function validateEmail(email) {

  const checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return checkEmail.test(String(email).toLowerCase());
}

export function checkInputLength(input) {
  
  if(input.count > 0) {
    return true
  }
  else { return false}
}