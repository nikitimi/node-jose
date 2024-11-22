import dirname from "../src/utils/dirname.js";
import { FILE_PREFIX, EMPTY_STRING } from "../src/utils/constants.js";
import path from "node:path";

test("This should output the root directory", () => {
  const testDirectory = path.dirname(import.meta.url);

  expect(dirname).toBe(
    testDirectory.split("test")[0].replace(FILE_PREFIX, EMPTY_STRING)
  );
});
