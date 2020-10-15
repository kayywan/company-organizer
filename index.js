var mysql = require("mysql");
var inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
//   password needs to be hidden
  password: "Swordstrike1!", 
  database: "companydb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  organize();
});

function organize() {
    inquirer
    .prompt ({
    message: "Welcome to Employee Organizer. What would you like to do?",
      choices: [
        "add departments, roles, employees",
        "view departments, roles, employees",
        "update employee roles",
        "update employee managers",
        "view employees by managers",
        "delete departments, roles, and employees"
      ]

    })
    .then(function(answer){
        switch(answer.action) {
            case "add departments, roles, employees":
                addDRE();
    break;

            case "view departments, roles, employees":
                viewDRE();
    break;
            case "update employee roles":
                updateRoles();
    break;
            case "update employee managers":
                updateManagers();
    break;
            case "view employees by managers":
                employeeByManager();
    break;
            case "delete departments, roles, and employees":
                deleteDRE();}
    break;

    });
}

// main functions are listed but requires 

function addDRE() {
    inquirer
      .prompt({
        message: "What section would you like to add to? Choose from 'departments', 'roles', or 'managers'.",
        name: "departments",
        name: "roles",
        name: "managers",
        type: "input"
      })
      .then(function(answer) {
        var query = "SELECT ?";
        connection.query(query, { artist: answer.artist }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
          }
          runSearch();
        });
      });
  }
;

function viewDRE() {
    inquirer
      .prompt({
        message: "What section would you like to add to? Choose from 'departments', 'roles', or 'managers'.",
        name: "departments",
        name: "roles",
        name: "managers",
        type: "input"
      })
      .then(function(answer) {
        var query = "SELECT ?";
        connection.query(query, { artist: answer.artist }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
          }
          runSearch();
        });
      });
  }
  ;

  function updateRoles() {
    inquirer
      .prompt({
        message: "What section would you like to add to? Choose from 'departments', 'roles', or 'managers'.",
        name: "departments",
        name: "roles",
        name: "managers",
        type: "input"
      })
      .then(function(answer) {
        var query = "SELECT ?";
        connection.query(query, { artist: answer.artist }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
          }
          runSearch();
        });
      });
  }
  ;

  function updateManagers() {
    inquirer
      .prompt({
        message: "What section would you like to add to? Choose from 'departments', 'roles', or 'managers'.",
        name: "departments",
        name: "roles",
        name: "managers",
        type: "input"
      })
      .then(function(answer) {
        var query = "SELECT ?";
        connection.query(query, { artist: answer.artist }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
          }
          runSearch();
        });
      });
  }
  ;

  function employeeByManager()
  inquirer
      .prompt({
        message: "What section would you like to add to? Choose from 'departments', 'roles', or 'managers'.",
        name: "departments",
        name: "roles",
        name: "managers",
        type: "input"
      })
      .then(function(answer) {
        var query = "SELECT ?";
        connection.query(query, { artist: answer.artist }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
          }
          runSearch();
        });
      });
  }
  ;

  function deleteDRE() {
    console.log("Deleting all strawberry icecream...\n");
    connection.query(
      "DELETE FROM products WHERE ?",
      {
        flavor: "strawberry"
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " products deleted!\n");
        // Call readProducts AFTER the DELETE completes
        readProducts();
      }
    );
  }
  