const express = require('express');

const app = express();

// this will only handle GET call to /user
app.get('/user', (req, res) => {
    res.send({ firstName: 'Akshay', lastName: 'saini', });
});

// this will only handle GET call to /user
app.post('/user', (req, res) => {
    console.log('save data to db');
    res.send("Data saved to db");
    // res.send({ firstName: 'Akshay', lastName: 'saini', });
});

// this will match all the HTTP method API call
app.use("/test", (req, res) => {
    res.send("hello from the test server");
});

// this will accept abc in route handler
app.get('/abc', (req, res) => {
    res.send({ firstName: 'Akshay', lastName: 'saini', });
});
// => /abc, /ac
app.get('/ab?c', (req, res) => {
    res.send({ firstName: 'Akshay', lastName: 'saini', });
});
// => /abcd, /ad (bc is optional here)
app.get('/a(bc)?d', (req, res) => {
    res.send({ firstName: 'Akshay', lastName: 'saini', });
});
// => /abc, /abbbbbbc
app.get('/ab+c', (req, res) => {
    res.send({ firstName: 'Akshay', lastName: 'saini', });
});
// => /abcd, /abcbcbcbcd
app.get('/a(bc)+d', (req, res) => {
    res.send({ firstName: 'Akshay', lastName: 'saini', });
});
// => /abcd, /abanything-can-be-herecd
app.get('/ab*cd', (req, res) => {
    res.send({ firstName: 'Akshay', lastName: 'saini', });
});
// => we can write nay regex here for matching route or providing route
app.get('/a/', (req, res) => {
    res.send({ firstName: 'Akshay', lastName: 'saini', });
});


app.listen(7777, () => {
    console.log('Server is successfully listening on port 3000');
});
