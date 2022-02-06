import { deepEqual } from "assert";
import { expect } from "chai";
import { romanToInt } from "../src/p013romanToInteger";

describe("romanToInt", () => {
  it("reverseSort1", () => {
    console.log("Starting Test For romanToInt");
    expect(romanToInt("III")).deep.equals(3);
  });
});
