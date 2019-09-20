const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table")
const chalk = require("chalk")
const connection = mysql.createConnection({
    host: "localhost",
    // Your port;
    port: 8889,
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("you have connected");
    displayTable();
});

function displayTable() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        loadManager(res);
    });
}

function loadManager(products) {
    inquirer.prompt({
        type: "list",
        name: "choice",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
        message: "What would you like to do?"
    }).then(function (value) {
        switch (value.choice) {
            case "View Products for Sale":
                console.table(products)
                displayTable();
                break;
            case "View Low Inventory":
                lowInventory();
                break;
            case "Add to Inventory":
                addInventory();
                break;
            case "Add New Product":
                addProduct();
                break;
            default:
                console.log("Good Bye!");
                process.exit(0)
                break;
        }
    })
}

function lowInventory(){
    connection.query("SELECT * FROM products WHERE stock_quantity <= 10", 
    function(err, res){
        if (err) throw err;
        console.table(res)
        loadManager()
    })
}

function addInventory(inventory){
    inquirer.prompt([{
        type: "input",
        name: "choice",
        message: "What is the id of the item?",
        validate: function(value){
            return !isNaN(value)
        }
    }])


}

checkInventory (choiceID, inventory) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].item_id === choiceID) {
        return inventory[i];
      }
    }
    return null;
  }