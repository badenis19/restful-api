const express = require('express'); // import package 
const app = express(); // execute the package
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv/config'); // allows access to .env file

// Middleware
app.use(morgan())
app.use(cors())
app.use(bodyParser.json()); // everytime we run any request we makethe bodyparser runs (solved issue with receiving undefined from PostMan post request)

// Import routes
const postsRoute = require('./routes/posts')

app.use("/posts", postsRoute) // use postsRoute every time we go on /posts

// ROUTES - can be created easily using express
app.get('/', (req, res) => {
    res.send('We are on Home')
});

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log("connected to DB!") // takes a bit of to print
)

// to listen to server
app.listen(3000);

