const args = process.argv.slice(2);

const request = require('request');
const fs = require('fs')

request(args[0], (error, response, body) => {
  console.log(`Downloaded and saved 1235 bytes to ${args[1]}`);
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err)
      return
    }
  })
});