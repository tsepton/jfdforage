const { log } = require("console");
const fs = require("fs");
const path = require("path");

function UpdateStaticFile() {
  const directoryPath = path.join(__dirname, "./public/img/gallerie");
  fs.readdir(directoryPath, (err, files) => {
    fs.writeFile('./src/gallerie_files.json', JSON.stringify(files), (err) => {
        if(err) return console.log(err);
        console.log("./src/gallerie_files.json was successfully saved");
    })
  });
}

UpdateStaticFile();
