import { stdin, stdout } from "node:process";
import readline from "node:readline";
import getFilesAndDirs from "./src/utils/getFilesAndDirs.js";
import fileReader from "./src/utils/fileReader.js";
import convertJWKToPem from "./src/utils/convertJWKToPem.js";

let isRunning = true;
let path = ["."];
const QUIT_TRIGGERS = [":q"];
const BACK_TRIGGERS = [":cd"];

while (isRunning) {
  const newPath = path.toLocaleString().replace(/,/g, "/").concat("/");
  const paths = await getFilesAndDirs(newPath);
  const logList = [
    `CurrentPath: [${newPath}]\n\n`,
    `Choose a directory?: ${paths.pathDirectories.toString()}\n`,
    `Choose files?: ${paths.pathFiles.toString()}\n`,
    `Quit? type any: [${QUIT_TRIGGERS.toLocaleString().replace(/,/g, ", ")}]\n`,
    `Back? type any: [${BACK_TRIGGERS.toLocaleString().replace(/,/g, ", ")}]\n`,
    "[Choice] ",
  ];
  const question = logList
    // Formatting the logs.
    .map((v) => v.replace(/,/g, "\\ "))
    .toLocaleString()
    .replace(/,/g, "")
    .replace(/\\/g, ",");
  const rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });
  await new Promise((resolve) =>
    rl.question(question, (answer) => {
      rl.close();
      const lowerCasedAns = answer.toLocaleLowerCase();
      const filePath = `${newPath}${lowerCasedAns}`;
      switch (true) {
        case QUIT_TRIGGERS.includes(lowerCasedAns):
          isRunning = false;
          return resolve(console.log("Exiting loop."));
        case BACK_TRIGGERS.includes(lowerCasedAns):
          return resolve(path.pop());
        case paths.pathDirectories.includes(lowerCasedAns):
          return resolve(path.push(lowerCasedAns));
        case paths.pathFiles.includes(lowerCasedAns):
          if (lowerCasedAns.includes("jwk")) {
            return resolve(
              convertJWKToPem({
                filename: filePath,
                shouldDumpPrivateKey: false,
              })
            );
          }

          return resolve(fileReader(filePath));
        default:
          resolve(console.log("Path doesn't exists."));
      }
    })
  );
}
