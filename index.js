const express = require('express')
const app = express()
const productsRoutes = require('./routes/productsRoutes')
const usersRoutes = require('./routes/usersRoutes')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const path = require('node:path')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()


app.listen(process.env.PORT,()=>{
    console.log("Server Started");
})

mongoose.connect(process.env.DB)
.then(()=>{
    console.log("DB Connected")
})
app.use(cors({
    origin : ['http://localhost:58118', 'http://localhost:4200']
}))
app.use(express.static(path.join(__dirname,'')))
app.use(cookieParser());
app.use(express.json());

app.use('/users', usersRoutes)
app.use('/products',productsRoutes)












// 'http://localhost:4200'





















































////////////////////////////////////////////////////////

// [
//     {
//         "id" : 1,
//         "productImage" : "./pics/Maskgroup1.png",
//         "price" : 9.99,
//         "title" : "Fried Eggs",
//         "category" : "Breakfast",
//         "info" : "Made with eggs, lettuce, salt, oil and other ingredients."
//     },
//     {
//         "id" : 2,
//         "productImage" : "./pics/Maskgroup2.png",
//         "price" : 15.99,
//         "title" : "Hawaiian Pizza",
//         "category" : "Main Dishes",
//         "info" : "Made with eggs, lettuce, salt, oil and other ingredients." 
//     },
//     {
//         "id" : 3,
//         "productImage" : "./pics/Maskgroup3.png",
//         "price" : 7.25,
//         "title" : "MartinezCocktail",
//         "category" : "Drinks",
//         "info" : "Made with eggs, lettuce, salt, oil and other ingredients." 
//     },
//     {
//         "id" : 4,
//         "productImage" : "./pics/Maskgroup4.png",
//         "price" : 20.99,
//         "title" : "Butterscotch Cake",
//         "category" : "Desserts",
//         "info" : "Made with eggs, lettuce, salt, oil and other ingredients." 
//     },
//     {
//         "id" : 5,
//         "productImage" : "./pics/Maskgroup5.png",
//         "price" : 5.89,
//         "title" : "Mint Lemonade",
//         "category" : "Drinks",
//         "info" : "Made with eggs, lettuce, salt, oil and other ingredients." 
//     },
//     {
//         "id" : 6,
//         "productImage" : "./pics/Maskgroup6.png",
//         "price" : 18.05,
//         "title" : "Chocolate Icecream",
//         "category" : "Desserts",
//         "info" : "Made with eggs, lettuce, salt, oil and other ingredients." 
//     },
//     {
//         "id" : 7,
//         "productImage" : "./pics/Maskgroup7.png",
//         "price" : 12.55,
//         "title" : "Cheese Burger",
//         "category" : "Main Dishes",
//         "info" : "Made with eggs, lettuce, salt, oil and other ingredients." 
//     },
//     {
//         "id" : 8,
//         "productImage" : "./pics/Maskgroup8.png",
//         "price" : 12.99,
//         "title" : "Chocolate Icecream",
//         "category" : "Desserts",
//         "info" : "Made with eggs, lettuce, salt, oil and other ingredients." 
//     }
// ]