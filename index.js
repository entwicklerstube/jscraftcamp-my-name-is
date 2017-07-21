#!/usr/bin/env node
const inquirer = require('inquirer')
const Listr = require('listr')

const steps = [{
  type: 'input',
  name: 'userName',
  message: 'Whats your name?'
}]


const tasks = [{
  title: 'Preparing',
  task: (context, task) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000)
  })
},{
  title: 'Ask for name',
  task: (context, task) => new Promise((resolve, reject) => {
    task.output = 'Starting'

    setTimeout(() => {
      task.output = 'Calculating'
      resolve()
    }, 500)

    // setTimeout(() => {
    // }, 2000)
  })
}]

// Test change for release
// Test change for release
// Test change for release
// Test change for release

const listrObject = new Listr(tasks)


listrObject.run().then(res => {
  inquirer
    .prompt(steps).then(output => {
    console.log(
      'Hello',
      output.userName
    )
  }).catch(err => console.log(err))
})
