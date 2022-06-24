const fs = require('fs');

function readFile (filename) {
  try {
    const data = fs.readFile(filename);
    return data.toString();
  } catch (err) {
    return null;
  }
}

module.exports = readFile;