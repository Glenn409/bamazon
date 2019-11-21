const inquire = require('inquirer')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'password',
    database:'bamazon_db'
})

connection.connect(function(err,res){
    if(err) throw err
    inquire.prompt([
        {
            type:'list',
            message:'What action would you like to do today?',
            choices:['View Product Sales by Department','Create New Department'],
            name: 'choice'
        }
    ]).then(function(data){
        switch(data.choice){
            case "View Product Sales by Department":
                viewDepartments()
                break
            case 'Create New Department':
                createDepartment()
                break
        }
    })
})

function viewDepartments(){
    connection.query(
    `SELECT departments.department_id,departments.department_name, departments.over_head_costs, SUM(products.product_sales) AS Sales, (SUM(products.product_sales) - (departments.over_head_costs)) AS Profit
    FROM products
    RIGHT JOIN departments 
    ON products.department_name = departments.department_name
    GROUP BY products.department_name`,
    function(err,data){
        if(err) throw err
        console.log(data.length)
        console.log('Departments')
        console.log('----------------------')
        for(let i = 0; i < data.length; i++){
            console.log(`ID: ${data[i].department_id} Name: ${data[i].department_name} Over Head Costs: ${data[i].over_head_costs} Sales: ${data[i].Sales} Profit: ${data[i].Profit}`)
        }
        connection.end();
    })
}

function createDepartment(){
    inquire.prompt([
        {
            type:'input',
            message: 'What department would you like to add?',
            name: 'newDepartment'
        },
        {
            type: 'input',
            message: 'What are the overhead costs?',
            name: 'costs'
        }
    ]).then(function(data){

        connection.query(`INSERT INTO departments (department_name,over_head_costs) VALUES ("${data.newDepartment}","${data.costs}")`,
        function(err,res){
            if(err) throw err
            console.log('Department Added!')
            connection.end()
        })
    })
}