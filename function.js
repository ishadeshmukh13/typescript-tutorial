"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detail(name) {
    return name;
}
function count(number) {
    return number;
}
// detail(true)  it is show error because parameter define as a string 
detail("isha");
count(5);
function signUpUser(email, password, isPaid) {
    var detail = "Email is ".concat(email, "  password is ").concat(password, " paid is ").concat(isPaid);
    return detail;
}
signUpUser("isha@gmail.com", "isha@123", false);
