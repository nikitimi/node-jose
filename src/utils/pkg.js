import packageJsonSchema from "../lib/schema/packageJson.js";
import json from "../../package.json" assert { type: "json" };

const { data, error } = packageJsonSchema.safeParse(json);

if (error) {
  throw new Error("Error parsing package.json:", error);
}
/** Access the schema of package without the need of TypeScript. */
const pkg = data;

export default pkg;
