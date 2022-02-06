import { expect } from "chai";
import { singleNumber } from "../src/p136singlenumber";

describe("SingleNumber", () => {
  it.only("singleNumber", () => {
    console.log("Starting Test For Single Number");
    expect(singleNumber([2, 2, 1])).deep.equals(1);
  });
});
