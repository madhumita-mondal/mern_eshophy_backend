// const express = require("express");
// const { errorHandler } = require("./middlewares/errorMiddleware");
// const products = require("./data/products");
// const dotenv = require("dotenv");
// const connectDb = require("./config/config");
// const productsRoute = require("./routes/productsRoute");
// const usersRoutes = require("./routes/UsersRoute");
// const orderRoutes = require("./routes/orderRoute");

// dotenv.config();

// //connecting to mongodb database
// connectDb();
// const app = express();

// //middleware bodyparser
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to Node server</h1>");
// });

// app.use("/api", productsRoute);
// app.use("/api/users", usersRoutes);
// app.use("/api/orders", orderRoutes);
// app.get("/api/config/paypal", (req, res) => {
//   res.send(process.env.PAYPAL_CLIENT_ID);
// });

// app.use(errorHandler);

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(
//     `Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`.inverse
//   );
// });




const express = require ("express");
const {errorHandler} = require('./middlewares/errorMiddleware')
require("colors");
const products = require ('./data/products');
const dotenv = require("dotenv");
const connectDb = require('./config/config');
const productsRoute = require ('./routes/productsRoute')
const usersRoutes = require ('./routes/UsersRoute')
const orderRoutes = require("./routes/orderRoute");
const path = require('path')
const cors = require('cors')


dotenv.config();

//connecting to mongodb database
connectDb();
const app = express();


//middleware bodyparser
app.use(express.json());



app.get('/', (req,res) => {
    res.send('<h1>Welcome to  Node server</h1>');
});

app.use(cors())
app.use('/api', productsRoute);
app.use('/api/users', usersRoutes);
app.use("/api/orders", orderRoutes);
app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);
  });
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://eshophy-frontend.onrender.com');
  res.setHeader('Access-Control-Allow-Methods', '"POST", "PUT", "GET", "DELETE", "OPTIONS"');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


//static files
app.use(express.static(path.join(__dirname,'./build')));

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './build/index.html'));
});

app.use(errorHandler);

const PORT = 8000;
app.listen(process.env.PORT || PORT, () => {
    console.log(
        `Server Running in ${process.env.NODE_ENV} mode on Port ${process.env.PORT}`.inverse);
});
