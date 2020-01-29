const express = require("express");

const app = express();

app.use(express.json()); //creates req.body

app.listen(5051, () => console.log(`Listening on Port 5051`));
