import convertJWKToPEM from "../src/utils/convertJWKToPem.js";
// THIS IS NOT WORKING DUE TO TEST IS TESTING IN commonjs, and not es modules.
test("✔ The output is PEM Key", async () => {
  const pemKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu2TRZIVCLWh3kb9gz8Nw
PmkWnVvI4LnBWXcP242qse/jM+h0nMtMS4rI+IVGflt6C3V32yKTXzu/UeA8s7XC
m7qQFOeSH3a+gsiTTG8X9HM3vDy7m+X82sefjsGir7dElGycPackf34dFb2ANMnI
Gzjc7Jh/Lhl3OYvl6Oeixj5n/Z7kY2huerPCRRfBW9MbBWF3sEZTGqYl9k8m7m/W
6Ncld0ubZo3czU4lNqTRCCRIhC+wloUYF6jO/U/YAZ+IImqfLch65CjsF31pEggO
ID54G5YZEl5acGpDwEuP4kmgJfZH2q9zxPJCQTbZ9w5r4tc/g288j38JvrCWLCDo
zwIDAQAB
-----END PUBLIC KEY-----
`;
  expect(
    await convertJWKToPEM({
      filename: "../test.jwk",
      shouldDumpPrivateKey: false,
    })
  ).resolves.toBe(pemKey);
});
