enum choiceOfColor {
  RED, // by default it is value 0 and after this value every variable or elements value is +1 companre to before element
  BLUE,
  GREEN,
  WHITE,
}
enum choiceOfColor2 {
  RED = "red", // by default it is value red and after this value every variable or elements value is nothing so we need to add value
  BLUE = "blue",
  GREEN = "green",
  WHITE = "white",
}

enum choiceOfColor3 {
  RED = "red", // by default it is value red and after this value every variable or elements value is nothing so we need to add value
  BLUE = 1, // it is value if we set 1 then after this var all var value is +1
  GREEN, //2
  WHITE, //3
}
let storecolorofwhite = choiceOfColor.WHITE;
console.log(storecolorofwhite);

export {};
