"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleUserDetail(user) {
    return user;
}
var user = {
    first_name: "ish",
    last_name: "ish",
    isActive: true,
};
handleUserDetail(user);
var userDetailsForAccount = {
    _id: "",
    first_name: "",
    isActive: true,
};
// userDetailsForAccount._id=12345   you can not change because _id is readonly variable
userDetailsForAccount.first_name = "dummy";
