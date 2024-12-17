const express = require('express');
const app = express();
const path = require('node:path');



const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log("Listening on port " + port);
});