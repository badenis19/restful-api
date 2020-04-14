const express = require('express'); // import package 

const app = express(); // execute the package

// Middlewares 
app.use('/posts', () => {
    console.log('This is a middleware running')
})

// ROUTES - can be created easily using express
app.get('/', (req,res) => {
    res.send('We are on Home')
    
});

app.get('/posts', (req,res) => {
    res.send('We are on Posts')
});

// to listen to server
app.listen(3000);

