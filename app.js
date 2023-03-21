require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./src/config/mongo");

app.use(cors());
app.use(express.json());

// const port = 3000;
const port = process.env.PORT || 3000;

//Route Principal
app.use("/api", require("./src/routes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// dbConnect();
