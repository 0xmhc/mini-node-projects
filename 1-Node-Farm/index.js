const fs = require("node:fs");

// blocking,synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `this is what we now about avocado. ${textIn}\n. Created on ${Date.now().toLocaleString()}`;

// fs.writeFileSync("./txt/output.txt", textOut);

// console.log("file written!");

// blocking,asynchronous way

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("Error");
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      fs.writeFile("./txt/final.txt", `${data2} \n${data3}`, "utf-8", (err) => {
        console.log("file has been written");
      });
    });
  });
});
console.log("will read file");
