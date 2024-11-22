import path from "node:path";
import pkg from "./pkg.js";
import { FILE_PREFIX, EMPTY_STRING } from "../utils/constants.js";

const dirOfThisFile = path.dirname(import.meta.url);
/** Module equivalent of CJS's __dirname.
 *
 * **NOTE: THIS ABSOLUTE `dirname` IS USELESS IN ESM, JUST STICK WITH RELATIVE IMPORTS.**
 */
const dirname = `${dirOfThisFile.split(pkg.name)[0]}${pkg.name}/`.replace(
  FILE_PREFIX,
  EMPTY_STRING
);

export default dirname;
