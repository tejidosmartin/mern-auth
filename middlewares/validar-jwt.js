const { response } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const validarJWT = (req, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "Token no válido",
    });
  }

  try {
    const { uuid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.uuid = uuid;
    req.name = name;

  } catch (error) {
      
    console.log(error);
    return res.status(401).json({
      ok: false,
      msg: "Token no válido",
    });
  }

  next();
};

module.exports = {
  validarJWT,
};
