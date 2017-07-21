#!/usr/bin/env node
const inquirer = require('inquirer')

const steps = [{
  type: 'input',
  name: 'userName',
  message: 'Whats your name?'
}]
inquirer
  .prompt(steps).then(output => {
  console.log(
    'hello',
    output.userName
  );
}).catch(err => console.log(err))