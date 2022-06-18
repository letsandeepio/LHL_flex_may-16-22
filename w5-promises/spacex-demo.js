const { read } = require("fs");
const { readdir, readFile } = require("fs/promises");

const readlinePromise = require("./readline-promise");

const rlp = readlinePromise.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readdir("./spacex")
  .then((files) => {
    const listOfFiles = files
      .map((rocket, index) => `${index + 1}. ${rocket.split(".")[0]}`)
      .join("\n");

    console.log(listOfFiles);

    return rlp.question("Please chose a rocket name: ");
  })
  .then((chosenRocket) => {
    console.log(`You have chosen ${chosenRocket}`);

    return readFile(`./spacex/${chosenRocket}.json`, { encoding: "utf8" });
  })
  .then((fileContent) => {
    const fileObject = JSON.parse(fileContent);

    console.log("==========description=======\n\n");

    console.log(fileObject.description);
  })
  .catch((error) => console.log("Something went wrong"))
  .finally(() => rlp.close());

  