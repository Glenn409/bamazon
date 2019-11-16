DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INTEGER,
    stock_quantity INTEGER,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES 
('Chicken Legs','butcher',2.99,50),
('Hamburger','butcher',2.60,35),
('Whole Turkey','butcher',10.99,10),
('Milk','dairy',2.50,100),
('Yogurt','dairy',1.99,500),
('Cheese','dairy',3.50,26),
('Doritos','chips',2.99,80),
('Lays','chips',2.99,70),
('Sun Chips','chips',3.99,50)