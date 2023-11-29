import fs from "fs";

export async function createProjectDir(dirname) {
  if (dirname.length < 1) {
    throw new Error("Directory name cannot be empty");
  } else if (fs.existsSync(dirname)) {
    throw new Error("Directory already exists");
  } else if (typeof dirname !== "string") {
    throw new Error("Directory name must be a string");
  } else if (/\d/.test(dirname)) {
    throw new Error("Directory name cannot contain numbers");
  } else {
    fs.mkdir(dirname, (err) => {
      if (err) {
        console.error(`Error creating directory: ${err.message}`);
      } else {
        return dirname;
      }
    });
  }
}
