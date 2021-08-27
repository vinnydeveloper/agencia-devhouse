const { v4: generateId } = require("uuid");
const fs = require("fs");
const path = require("path");

const produtoJson = require("../databases/produtos.json");

const produtoModel = {
  listaDeProdutos: produtoJson,
  cadastrarProduto: function (nome, descricao, imagem) {
    const novoProduto = {
      id: generateId(),
      nome,
      descricao,
      imagem,
    };

    this.listaDeProdutos.push(novoProduto);

    this.atualizaJson();
    //produtoModel.atualizaJson

    return;
  },
  excluirProduto: function (id) {
    console.log(id);
    const novaListaDeProdutos = this.listaDeProdutos.filter(
      (produto) => produto.id !== id
    );

    if (novaListaDeProdutos.length >= this.listaDeProdutos.length) return false;

    this.listaDeProdutos = novaListaDeProdutos;

    this.atualizaJson();
    return true;
  },

  atualizaJson() {
    const listaEmJson = JSON.stringify(this.listaDeProdutos);
    fs.writeFileSync(path.resolve("databases", "produtos.json"), listaEmJson);
  },
};

module.exports = produtoModel;
