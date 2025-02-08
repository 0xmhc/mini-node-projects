const fs = require("node:fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(textIn);

const textOut = `this is what we now about avocado. ${textIn}\n. Created on ${Date.now().toLocaleString()}`;

fs.writeFileSync("./txt/output.txt", textOut);

console.log("file written!");
