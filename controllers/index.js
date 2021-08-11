const modelDepoimentos = require("../models/depoimentos");
const path = require("path");

const indexController = {
  exibirHome: (req, res) => {
    const usuario = undefined;
    res.render("home", { titulo: "Sua empresa vai ser incrivel!", usuario });
  },

  redirectHome: (req, res) => {
    res.redirect("/");
  },

  exibirManutencao: (req, res) => {
    res.sendFile(path.resolve("views", "manutencao.html"));
  },

  exibirDepoimentos: (req, res) => {
    res.render("depoimentos", {
      depoimentos: modelDepoimentos.depoimentos,
      titulo: "Depoimentos",
    });
  },

  exibirFormDepoimento: (req, res) => {
    res.render("cadastroDepoimento");
  },

  cadastrarDepoimento: (req, res) => {
    console.log(req.body);
    const { autor, titulo, descricao } = req.body;

    modelDepoimentos.cadastrarDepoimento(autor, titulo, descricao);
    return res.redirect("/depoimentos");
  },
};

module.exports = indexController;
