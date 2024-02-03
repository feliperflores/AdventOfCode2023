import { readFile } from "fs";
import getCalibration from "./sumOfAllCalibrations.js";

readFile('./input.txt', (err, data) => {
  const values = data.toString().split("\r\n");
  console.log(getCalibration(values));
});
