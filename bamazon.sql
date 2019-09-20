DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (90) NULL,
    department_name VARCHAR(90) NULL,
    price DECIMAL (10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fire TV Stick", "Amazon Devices", 39.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Under Armour Men's Raid 10' Shorts", "Athletic Apparel", 29.99, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Men's Dry Training Shorts", "Athletic Apparel", 30.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ring Alarm Motion Detector", "Amazon Devices", 29.99, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("AmazonBasics Enamel Kettlebell", "Sports and Outdoors", 34.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("CAP Barbell Cast Iron Competition Kettlebell Weight", "Sports and Outdoors", 54.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Story of Ferdinand", "Books", 17.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Rainbow Fish", "Books", 18.95, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Where the Wild Things Are", "Books", 18.95, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Complete Tales of Winnie-The-Pooh", "Books", 40.00, 20);