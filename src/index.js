import Express from "express";
import {square} from './math';

var app = Express();
const PORT = 8000;

/* @flow */
function add(num1: number, num2: number): number {
  return num1 + num2;
}

app.get("/", (req, res) => {
  res.send("Hello, world! I like " + square(4) + " and " + add(3, 9) + " a lot.");
});

app.listen(PORT, () => {
  console.log("Server started on the port", PORT);
});
