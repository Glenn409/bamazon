DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INTEGER,
    stock_quantity INTEGER,
    product_sales INTEGER,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity,product_sales)
VALUES 
('Chicken Legs','butcher',2.99,50,2000),
('Hamburger','butcher',2.60,35,4500),
('Whole Turkey','butcher',10.99,10,750),
('Milk','dairy',2.50,100,2200),
('Yogurt','dairy',1.99,500,1200),
('Cheese','dairy',3.50,26,1100),
('Doritos','chips',2.99,80,800),
('Lays','chips',2.99,70,900),
('Sun Chips','chips',3.99,50,400)