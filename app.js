const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

const addManager = () => {

inquirer
    .prompt([
        { 
            type: "input",
            name: "name",
            message: "Manager's name?"

        },
        {
            type: "input",
            name: "name",
            message: "Manager's email?"

        },

       
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });








