require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./src/config/mongo");

app.use(cors());
//Implementación de un middleware para poder recibir datos de tipo JSON
app.use(express.json());
//Implementación de un middleware para poder recibir datos públicos desde "storage" para obtener URL
app.use(express.static("storage"));

// const port = 3000;
const port = process.env.PORT || 3000;

//Route Principal
app.use("/api", require("./src/routes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

dbConnect();