import { extname } from "path";

export function isValidPath(path) {
  return !!extname(path);
}
