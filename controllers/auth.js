const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
  const { name, email, password } = req.body;

  try {
    //check email
    const usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe con ese email",
      });
    }

    //crear user con model
    const dbUsuario = new Usuario(req.body);

    //encrypt pass
    const salt = bcrypt.genSaltSync();
    dbUsuario.password = bcrypt.hashSync(password, salt);

    //generar jwt
    const token = await generarJWT(dbUsuario.id, name);

    //crear usuario db
    await dbUsuario.save();

    //generar response exitosa
    return res.status(201).json({
      ok: true,
      uid: dbUsuario.id,
      name,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno",
    });
  }
};

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const dbUsuario = await Usuario.findOne({ email });

    if (!dbUsuario) {
      return res.status(400).json({
        ok: false,
        msg: "El correo no existe",
      });
    }

    //confirmar password match
    const validPass = bcrypt.compareSync(password, dbUsuario.password);

    if (!validPass) {
      return res.status(400).json({
        ok: false,
        msg: "El pass no existe",
      });
    }

    //generar jwt
    const token = await generarJWT(dbUsuario.id, dbUsuario.name);

    //respuesta
    return res.json({
      ok: true,
      msg: "Login correcto",
      uuid: dbUsuario.id,
      name: dbUsuario.name,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno",
    });
  }
};

const revalidarToken = async(req, res = response) => {
  const { uuid, name } = req;

  const token = await generarJWT(uuid, name);

  return res.json({
    ok: true,
    uuid,
    name,
    token
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
