import { readFileSync } from "fs";

const readFiles = (filename) => {
  const contents = readFileSync(filename, "utf-8").split(/\r?\n/);

  contents.sort((a, b) => (a > b ? 1 : -1));

  contents.forEach((word) => console.log(word));
};

readFiles("./txt.txt");
  