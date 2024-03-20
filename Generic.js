"use strict";
//In this if we add type and then if you write string then return string and same type return S
Object.defineProperty(exports, "__esModule", { value: true });
function handleType(value) {
    return value;
}
//same pattern 
function handleType2(value) {
    return value;
}
handleType("ish");
handleType(9);
function handleType3(value) {
    return value;
}
handleType3({
    name: "ish",
    score: 34
});
var score = [];
function handleArray(arr) {
    return arr[3];
}
handleArray([3, 53, 3]);
