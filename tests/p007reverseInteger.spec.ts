import { deepEqual } from "assert";
import { expect } from "chai";
import { reverseInteger } from "../src/p007reverseInteger";

describe("reverseSort", () => {
  it("reverseSort1", () => {
    console.log("Starting Test For reverseSort");
    expect(reverseInteger(1534236469)).deep.equals(0);
  });
});
