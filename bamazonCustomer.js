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
  start();
});
  function start() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.table(res);
    askUser(res);
  });
}
  function askUser(productInventory) {
  inquirer.prompt([
    {
      name: "productID",
      type: "input",
      message: "Please enter a product ID you would like to order. Press [q] to quit.",
      validate: function (value) {
        return !isNaN(value) || value.toLowerCase() === "q"
      }
    }
  ]).then(function (answer) {
    exit(answer.productID)
    let productID = parseInt(answer.productID);
    let product = checkProduct(productID, productInventory)
    if (product) {
      askQuantity(product)
    }
    else {
      console.log("")
      console.log(chalk.red("Item is not in inventory"))
      console.log("")
      start();
    }
  });
}
function askQuantity(product){
  inquirer.prompt(
      [{ 
      name: "productQuantity",
      type: "input",
      message: "how many would you like to purchase. Press [q] to quit.",
      validate: function (value) {
        return !isNaN(value) || value.toLowerCase() === "q"
      }
    }]).then(function (answer){
      exit(answer.productQuantity)
      let quantity = parseInt(answer.productQuantity)
      if (quantity > product.stock_quantity){
        console.log("insufficient quantity")
        start();
      }
      else {
        makePurchase(product, quantity)
      }
    })
   
}
function makePurchase(product, quantity){
  connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", 
  [quantity, product.item_id], 
  function(err, res){
    console.log("")
    console.log(chalk.green("You succesfully purchased " + quantity + " " + product.product_name + "(s)"))
    console.log("")
    start()
  })
}
function checkProduct(productID, productInventory) {
  for (let i = 0; i < productInventory.length; i++) {
    if (productInventory[i].item_id === productID) {
      return productInventory[i];
    }
  }
  return null;
}
function exit(choice){
  if (choice.toLowerCase() === "q"){
    console.log("")
    console.log(chalk.yellow("Have a nice day!"))
    console.log("")
    process.exit(0)
  }
}