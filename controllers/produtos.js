const produtoModel = require("../models/produtos");
const produtoController = {
  listarProdutosAdmin: (req, res) => {
    res.render("admin/produtos", {
      produtos: produtoModel.listaDeProdutos,
    });
  },
  cadastrarProduto: (req, res) => {
    res.render("admin/cadastroProduto");
  },

  salvarProduto: (req, res) => {
    console.log(req.body);
    const { nome, descricao, imagem } = req.body;
    produtoModel.cadastrarProduto(nome, descricao, imagem);
    res.redirect("/admin/produtos");
  },

  deletarProduto: (req, res) => {
    const { id } = req.params;
    const resultado = produtoModel.excluirProduto(id);

    if (!resultado) {
      res.send("deu ruim");
    }

    res.redirect("/admin/produtos");
  },
};

module.exports = produtoController;
