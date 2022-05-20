const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/config");
require("dotenv").config();

//crear el servidor/app de express
const app = express();

//db
dbConnection();

//directorio publico
app.use(express.static("public"));

//cors
app.use(cors());

//lectura y parse del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log(`up in ${process.env.PORT}`);
});
