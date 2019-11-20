USE bamazon_db;

CREATE TABLE departments(
    department_id INTEGER AUTO_INCREMENT,
    department_name VARCHAR(99),
    over_head_costs INTEGER,
    PRIMARY KEY (department_id)
);

INSERT INTO departments(department_name,over_head_costs)
VALUES
('butcher',5000),
('dairy',2500),
('chips',800)

