const { Router } = require("express");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

//nuevo usuario
router.post(
  "/register",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatorio").isLength({ min: 6 }),
    validarCampos,
  ],
  crearUsuario
);

//login usuario
router.post(
  "/",
  [
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatorio").isLength({ min: 6 }),
    validarCampos,
  ],
  loginUsuario
);

//validar y revalidar token
router.get("/renew", validarJWT, revalidarToken);

module.exports = router;
