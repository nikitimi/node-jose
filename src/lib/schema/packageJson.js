import { z } from "zod";

export default z.object({
  name: z.string(),
  version: z.string(),
  main: z.string(),
  type: z.string(),
  dependencies: z.record(z.string(), z.string()),
  scripts: z.record(z.string(), z.string()),
  author: z.string(),
  license: z.string(),
  description: z.string(),
  devDependencies: z.record(z.string(), z.string()),
  jest: z.record(z.string(), z.union([z.record(z.string()), z.string()])),
});
