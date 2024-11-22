import jose from "node-jose";
import fs from "node:fs/promises";

async function convertJWKToPEM({
  filename = "../../test.jwk",
  shouldDumpPrivateKey = false,
}) {
  const args = [filename, "false"];
  const key = await fs.readFile(args[0]);
  console.log(key);

  try {
    if (filename === "") {
      throw new Error(
        "PEM key Error, you either pass a non existing file, or it is just pure skill issue."
      );
    }

    const pemKey = await jose.JWK.asKey(key);
    const finalOutput = pemKey.toPEM(shouldDumpPrivateKey);

    /** Remove if .pem exists. */
    // if (fs.existsSync(filePath)) {
    //   fs.rmSync(filePath);
    // }

    /** Write result into .pem file. */
    // fs.writeFileSync(filePath, finalOutput);
    console.log(finalOutput);

    return finalOutput;
  } catch (e) {
    return e.message;
  }
}

export default convertJWKToPEM;
