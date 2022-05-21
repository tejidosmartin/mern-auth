const { Router } = require("express");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");
const { defaultMaxListeners } = require("nodemailer/lib/xoauth2");
const { email } = require("../helpers/email-settings");

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

router.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, (info) => {
    console.log(`email has been send ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  const data = email();

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "risaaflo@gmail.com",
      pass: "ygkiwcbvbjjtudfc",
    },
  });

  let mailOptions = {
    from: "risaaflo@gmail.com",
    to: user.email,
    subject: data.subjectSus,
    html: data.htmlSus,
  };

  let info = await transporter.sendMail(mailOptions);
  callback(info);
}

module.exports = router;
