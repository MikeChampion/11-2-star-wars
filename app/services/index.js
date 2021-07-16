import { promises as fs } from "fs";

let data = [];
const rootPath = new URL("../../", import.meta.url).pathname;
// console.log("../..", import.meta.url);
export const index = () => data;

export const show = (characterRoute) =>
  data.find((d) => d.route === characterRoute);

export const add = (newCharacter) => {
  const updatedData = [...data, newCharacter];
  return fs.writeFile(
    `${rootPath}db.json`,
    JSON.stringify(updatedData, null, 2)
  );
};

(async () => {
  data = JSON.parse(await fs.readFile(`${rootPath}db.json`, "utf8"));
})();
