const fs = require("fs");

// fs.writeFile("message.txt", "Hello, World!", (err) => {      // this is used to create a new file named "message.txt" and write the string "Hello, World!" into it
//     if (err) throw err;
//     console.log("File has been created!");
// });

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);   // this is used to read the content of the file and print it to the console    
});