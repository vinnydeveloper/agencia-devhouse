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

  fazerLogin(req, res) {
    const { email, senha } = req.body;

    const usuarioSalvo = usuarioModel.buscarUsuarioPorEmail(email);

    if (!usuarioSalvo || usuarioSalvo.senha != senha) {
      res.render("login", {
        error: "Usuario não existe ou a senha está errada!",
      });
    }

    return res.redirect("/admin/produtos");
  },
};

module.exports = usuarioController;
