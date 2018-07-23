const fs = require('fs');

function findDuplicateFiles(startingDirectory) {
  // Implement a DFS
  let filesSeenAlready = {};
  let stack = [startingDirectory];

  let duplicates = [];

  while (stack.length) {
    const currentPath = stack.pop();
    const currentFile = fs.statSync(currentPath);

    if (currentFile.isDirectory()) {
      fs.readdirSync(currentPath).forEach(path => {
        stack.push(`${currentPath}/${path}`);
      });
    } else {
      const fileContents = fs.readFileSync(currentPath);
      const currentLastEditedTime = currentFile.mtime;

      if (filesSeenAlready.hasOwnProperty(fileContents)) {
        const existingFile = filesSeenAlready[fileContents];

        if (currentLastEditedTime > existingFile.lastEditedTime) {
          duplicates.push([currentPath, existingFile.path]);
        } else {
          duplicates.push([existingFile.path, currentPath]);
          filesSeenAlready[fileContents] = {
            lastEditedTime: currentLastEditedTime,
            path: currentPath
          };
        }
      } else {
        filesSeenAlready[fileContents] = {
          lastEditedTime: currentLastEditedTime,
          path: currentPath
        };
      }
    }
  }

  return duplicates;
}

/*
function isFile() {
  const fileName = new Set();

  for (let i = 0; i < this.length; i++) {
    fileName.add(this[i]);
  }

  return fileName.has('.') ? true : false;
}
*/

module.exports = findDuplicateFiles;
