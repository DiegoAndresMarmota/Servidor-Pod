const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());

// const port = 3000;
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
