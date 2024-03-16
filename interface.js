"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var details = {
    _id: 23,
    userFirstName: "ish",
    userLastName: "ish",
    isActive: false,
    userDetail: function () {
        return {
            userFirstName: this.userFirstName,
            userLastName: this.userLastName
        };
    },
    handleActivePart: function () {
        return "".concat(this.userFirstName, " is ").concat(this.isActive ? "online" : "offline");
    }
};
details['userMiddleName'] = "ish";
console.log(details.userDetail());
details['userMiddleName'] = "ish";
