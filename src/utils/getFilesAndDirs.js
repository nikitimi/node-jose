import fs from "node:fs/promises";

/** Get the string names of files, directories, together with their stats. */
export default async function getFilesAndDirs(initialPath = ".") {
  const paths = await fs.readdir(initialPath);
  const pathsWithStats = await Promise.all(
    paths.map(async (path) => ({
      [path]: await fs.stat(initialPath.concat(path)),
    }))
  );
  const pathsIsDirectory = pathsWithStats.reduce(
    (prev, current, index) => ({
      ...prev,
      [paths[index]]: current[paths[index]].isDirectory(),
    }),
    {}
  );
  const pathDirectories = Object.entries(pathsIsDirectory)
    .filter(([, isDir]) => isDir)
    .map(([k]) => k);
  const pathFiles = paths.filter((p) => !pathDirectories.includes(p));

  return {
    pathDirectories,
    pathFiles,
    pathsWithStats,
  };
}
