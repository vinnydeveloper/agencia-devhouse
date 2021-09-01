const usuarioModel = require("../models/usuarios");

const usuarioController = {
  exibirLogin(req, res) {
    return res.render("login");
  },
  exibirCadastro(req, res) {
    return res.render("cadastro");
  },

  salvarUsuario(req, res) {
    const { nome, email, senha } = req.body;

    usuarioModel.cadastrarUsuario(nome, email, senha);

    return res.redirect("/login");
  },
};

module.exports = usuarioController;
