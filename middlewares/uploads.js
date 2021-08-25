const multer = require("multer");
const { v4: gerarNomeAleatorio } = require("uuid");

const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("public", "uploads"));
  },
  filename: function (req, file, cb) {
    const extensao = file.originalname.split(".").pop();
    const nomeArquivo = `${gerarNomeAleatorio()}.${extensao}`;
    cb(null, nomeArquivo);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
