const express = require('express');

const port = 7000;

const app = express();

app.listen(port, (error) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`server start on port ${port}`);
})