const fs = require("fs")

const getRequestHandlers = (directory) => {
   return fs.readdirSync(directory).reduce((acc, file) => {
      if (file !== "index.js" && /[a-zA-Z0-9\-]*.js$/.test(file)) {
         // console.log(`charge du fichier ${file}`)
         const requiredFile = require(`${directory}/${file}`);
         Object.assign(acc, requiredFile);
      }
      return acc
   }, {});
}

module.exports = getRequestHandlers;