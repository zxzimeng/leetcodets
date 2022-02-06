import { expect } from "chai";
import { generateFibnacci } from "../src/fibonacciSquence";

describe("generateFibnacci", () => {
  it("generateFibnacci", () => {
    expect(generateFibnacci(5)).deep.equals(5);
  });
});
