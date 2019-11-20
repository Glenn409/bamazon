const inquire = require('inquirer')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'password',
    database:'bamazon_db'
})

connection.connect(function(err){
    if(err)throw err;
    console.log('connecte to db')
    readAllItems()
    setTimeout(function(){
        buyItem()
    },500)
})

function readAllItems(){
    connection.query('SELECT * FROM products',function(err,data){
        if(err)throw err;
        console.log('Printing Current Products in Database\n')
        for(let i = 0; i < data.length; i++){
            console.log(`Id: ${data[i].item_id} Product: ${data[i].product_name} Price: ${data[i].price}`)
        }
        console.log('\n')
    })
}

function buyItem(){
    inquire.prompt([
        {
            type:'input',
            message: 'What Product would you like to buy? enter a Id Number',
            name: 'id'
        },
        {
            type: 'input',
            message: 'How many would you like to buy?',
            name: 'quantity'
        },
    ]).then(function(res){
        connection.query('SELECT * FROM products WHERE item_id = '+ res.id,function(err,data){
            if(err)throw err;
            if(data[0].stock_quantity < res.quantity){
                console.log(`Insufficient quanitity, only ${data[0].stock_quantity} left in stock!`)
            } else {
                console.log(data[0].product_sales)
                let purchaseRevenue = res.quantity * data[0].price
                console.log(`You ordered ${res.quantity} quantities of ${data[0].product_name}.`)
                connection.query('UPDATE products SET ? WHERE ?',[
                    {
                        stock_quantity: data[0].stock_quantity - res.quantity,
                        product_sales: data[0].product_sales + purchaseRevenue
                    },
                    {
                        item_id: data[0].item_id
                    }
                ],function(err,res){
                    if(err) throw err
                    console.log('updated stock quantity')
                })
            }
            connection.end();
        })
    })
}

