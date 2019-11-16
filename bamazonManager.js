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
    console.log('Connected to DB')
    inquire.prompt([
        {
            type: 'list',
            message:'What would you like to do today?',
            choices:['View Products for Sale','View Low Inventory','Add to Inventory','Add New Product'],
            name: 'choice'
        }
    ]).then(function(data){
        switch(data.choice){
            case 'View Products for Sale':
                readAllItems(true)
                break;
            case 'View Low Inventory':
                readAllItems('low')
                break;
            case 'Add to Inventory':
                break;
            case 'Add New Product':
                break;
        }
        connection.end()
    })
})

function addInventory(){
    readAllItems(true)
    inquire.prompt([
        {
            type: 'input',
            message:'Enter the ID of which product you would like to purchase',
            name:'id'
        },
        {
            type: 'input',
            message:'Enter the quantity you would like the purchase',
            name:'quantity'
        }
    ]).then(function(data){
        
    })
}

function readAllItems(decision){
    if(decision === true){
        connection.query('SELECT * FROM products',function(err,data){
            if(err)throw err;
            console.log('Printing Current Products in Database\n')
            for(let i = 0; i < data.length; i++){
                console.log(`Id: ${data[i].item_id} Product: ${data[i].product_name} Price: ${data[i].price} Stock: ${data[i].stock_quantity}`)
            }
            console.log('\n')
        })
    } else if (decision === 'low'){
        connection.query('SELECT * FROM products WHERE stock_quantity < 6',function(err,data){
            if(err) throw err
            console.log('Current Items that are Low Inventory are:\n')
            for(let i = 0; i < data.length; i++){
                console.log(`ID: ${data[i].item_id} Product: ${data[i].product_name} Stock: ${data[i].stock_quantity}`)
            }
        })
    }
}