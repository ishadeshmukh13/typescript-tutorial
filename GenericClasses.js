"use strict";
//in this you can return object multi value pass
Object.defineProperty(exports, "__esModule", { value: true });
var handleGeneriClasses = function (value1, value2) {
    return {
        value1: value1,
        value2: value2
    };
};
handleGeneriClasses(3, 2);
//in this pass second value only string if you pass any another type then it will showing error
var handleGeneriClasses2 = function (value1, value2) {
    return {
        value1: value1,
        value2: value2
    };
};
handleGeneriClasses2(3, "jdh");
var handleGeneriClasses3 = function (value1, value2) {
    return {
        value1: value1,
        value2: value2
    };
};
handleGeneriClasses3(3, { name: "ish" });
