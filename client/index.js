const yargs = require("yargs");
const { createIssue, getIssue, updateIssue, deleteIssue } = require("./api");
const { printResponse, printError } = require("./helper");

yargs
  .scriptName("node index.js")
  .usage("$0 <cmd> [args]")
  .command(
    "create [title] [description]",
    "Create an issue",
    (yargs) => {
      yargs
        .positional("title", {
          type: "string",
          describe: "the title of issue",
        })
        .positional("description", {
          type: "string",
          describe: "the description of issue",
        });
    },
    function (argv) {
      createIssue(argv.title, argv.description)
        .then(printResponse)
        .catch(printError);
    }
  )
  .command(
    "get [id]",
    "Show issue",
    (yargs) => {
      yargs.positional("id", {
        type: "string",
        describe: "the id of issue",
      });
    },
    function (argv) {
      getIssue(argv.id).then(printResponse).catch(printError);
    }
  )
  .command(
    "update [id] [title] [description]",
    "Update issue",
    (yargs) => {
      yargs
        .positional("id", {
          type: "string",
          describe: "the id of issue",
        })
        .positional("title", {
          type: "string",
          describe: "the title of issue",
        })
        .positional("description", {
          type: "string",
          describe: "the description of issue",
        });
    },
    function (argv) {
      updateIssue(argv.id, argv.title, argv.description)
        .then(printResponse)
        .catch(printError);
    }
  )
  .command(
    "delete [id]",
    "Delete issue",
    (yargs) => {
      yargs.positional("id", {
        type: "string",
        describe: "the id of issue",
      });
    },
    function (argv) {
      deleteIssue(argv.id).then(printResponse).catch(printError);
    }
  )
  .help().argv;
