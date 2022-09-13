import { describe } from "mocha";
import assert from "assert";

import { isValidPath } from "../helpers/resolver.js";

describe("path resolver", () => {
  it("should be valid path", () => {
    assert.equal(isValidPath("./math.test.js"), true);
  });

  it("should be invalid path", () => {
    assert.equal(isValidPath("./m"), false);
  });
});
