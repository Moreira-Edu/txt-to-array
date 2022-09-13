// Simple math tests
// Checks if the test suite is working
import { describe } from "mocha";
import assert from "assert";

function multiply(a, b) {
  return a * b;
}

function sum(a, b) {
  return a + b;
}

describe("basic math", () => {
  it("should multiply 1 by 5", () => {
    assert.equal(multiply(1, 10), 10);
  });

  it("should sum 400 with 200", () => {
    assert.equal(sum(400, 200), 600);
  });
});
