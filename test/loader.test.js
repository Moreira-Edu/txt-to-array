import { describe } from "mocha";
import { readLinesAsync } from "../index.js";
import assert from "assert";

const DATA_PATH = "./test/data/ptBR_dict.txt";
const READ_OPTIONS = {
  eol: "\r\n",
};

describe("file loader (index)", () => {
  it("should load lines", async () => {
    assert.equal(
      (await readLinesAsync(DATA_PATH, READ_OPTIONS)).length > 0,
      true
    );
  });

  it("should load lines as array", async () => {
    assert.equal(
      Array.isArray(await readLinesAsync(DATA_PATH, READ_OPTIONS)),
      true
    );
  });

  it("should load lines as string", async () => {
    assert.equal(
      Array.isArray(await readLinesAsync(DATA_PATH, { eol: false })),
      false
    );
  });

  it("should have 'AC' as the first line", async () => {
    assert.equal((await readLinesAsync(DATA_PATH, READ_OPTIONS))[0], "AC");
  });
});
