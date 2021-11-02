const fs = require("fs/promises");
const PATH = require("./contactsPath");
const readData = async () => {
  const result = await fs.readFile(PATH, "utf8");
  return JSON.parse(result);
};
module.exports = readData;
