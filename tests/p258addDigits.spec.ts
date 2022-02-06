import { expect } from "chai";
import { addDigits } from "../src/p258addDigits";

describe("addDigits", () => {
  it.only("addDigits", () => {
    expect(addDigits(38)).be.equals(2);
  });
});
