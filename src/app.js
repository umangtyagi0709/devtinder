const express = require('express');

const app = express();

app.use("/",(req, res) => {
    res.send("hello from the dashboard");
});

app.use("/hello", (req, res) => {
    res.send("hello from the hello server");
});

app.use("/test", (req, res) => {
    res.send("hello from the test server");
});

app.listen(7777, () => {
    console.log('Server is successfully listening on port 3000');
});
