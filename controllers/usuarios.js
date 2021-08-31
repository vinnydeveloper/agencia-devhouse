const usuarioModel = require("../models/usuarios");

const usuarioController = {
  exibirLogin(req, res) {
    return res.render("login");
  },
  exibirCadastro(req, res) {
    return res.render("cadastro");
  },
};

module.exports = usuarioController;
