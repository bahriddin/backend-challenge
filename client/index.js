const yargs = require("yargs");
const axios = require("axios");

const url = "http://localhost:3000/issues/";

yargs
  .scriptName("API")
  .usage('$0 <cmd> [args]')
  .command('create [title] [description]', 'Create an issue', (yargs) => {
    yargs.positional('title', {
      type: 'string',
      describe: 'the title of issue'
    }).positional('description', {
      type: 'string',
      describe: 'the description of issue'
    })
  }, function (argv) {
    axios.post(url, { headers: { Accept: "application/json" }, title: argv.title, description: argv.description })
    .then(response => {
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  })
  .command('get [id]', 'Show issue', (yargs) => {
    yargs.positional('id', {
      type: 'string',
      describe: 'the id of issue'
    })
  }, function (argv) {
    axios.get(url + argv.id, { headers: { Accept: "application/json" } })
    .then(response => {
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  })
  .command('update [id] [title] [description]', 'Update issue', (yargs) => {
    yargs.positional('id', {
      type: 'string',
      describe: 'the id of issue'
    }).positional('title', {
      type: 'string',
      describe: 'the title of issue'
    }).positional('description', {
      type: 'string',
      describe: 'the description of issue'
    })
  }, function (argv) {
    axios.put(url + argv.id, { headers: { Accept: "application/json" }, title: argv.title, description: argv.description })
    .then(response => {
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  })
  .command('delete [id]', 'Delete issue', (yargs) => {
    yargs.positional('id', {
      type: 'string',
      describe: 'the id of issue'
    })
  }, function (argv) {
    axios.delete(url + argv.id, { headers: { Accept: "application/json" } })
    .then(response => {
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  })
  .help()
  .argv