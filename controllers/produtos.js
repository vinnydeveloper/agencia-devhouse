const produtoModel = require("../models/produtos");
const produtoController = {
  listarProdutosAdmin: (req, res) => {
    res.render("admin/produtos");
  },
  cadastrarProduto: (req, res) => {
    res.render("admin/cadastroProduto");
  },
  salvarProduto: (req, res) => {
    console.log(req.body);
    const { nome, descricao, imagem } = req.body;
    produtoModel.cadastrarProduto(nome, descricao, imagem);

    console.log(produtoModel.listaDeProdutos);

    res.send("Cadastro concluido");
  },
};

module.exports = produtoController;
