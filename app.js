const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Adding a new note...");
  }
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing the note...");
  }
});

// create remove command
yargs.command({
  command: "list",
  describe: "List the notes",
  handler: function() {
    console.log("Listing the notes...");
  }
});

// create remove command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Reading the note...");
  }
});

console.log(process.argv);
console.log(yargs.argv);
