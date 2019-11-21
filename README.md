# BAMAZON
A command line application that interacts with a mysql database to mock a retail store.

    1. Git Clone https://github.com/Glenn409/bamazon.git
    2. npm install
    3. Run the sql files through a local database it will insert tables/databases for the application to interact with.
# BamazonCustomer.js   
This is a basic representation of how a customer would interact throughout a database. It allows a customer to
1. View all inventory
2. Purchase inventory

run the code to use


    node bamazonCustomer.js

# BamazonManager.js
This one is a manager's point of view of a retail store. It allows the manager to
1. View all inventory
2. View all low inventory
3. Add inventory
4. Add new inventory

run the code to use

    node bamazonManager.js

# BamazonSuperVisor.js
This a supervisor's point of a view. It allows a supervisor to
1. View all departments and thier profits
2. Add departments

run the code to use

    node bamazonSupervisor.js