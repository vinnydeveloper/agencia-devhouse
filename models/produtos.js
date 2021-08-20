const { v4: generateId } = require("uuid");

const produtoModel = {
  listaDeProdutos: [
    {
      id: generateId(),
      nome: "Site",
      descricao: "Seu site incrivel",
      imagem:
        "https://cdn.w600.comps.canstockphoto.com.br/loja-site-web-produto-conceito-bot%C3%A3o-vetor-cliparte_csp52582154.jpg",
    },
    {
      id: generateId(),
      nome: "Plataforma",
      descricao: "Seu site incrivel",
      imagem:
        "https://cdn.w600.comps.canstockphoto.com.br/loja-site-web-produto-conceito-bot%C3%A3o-vetor-cliparte_csp52582154.jpg",
    },
  ],
  cadastrarProduto: function (nome, descricao, imagem) {
    const novoProduto = {
      id: generateId(),
      nome,
      descricao,
      imagem,
    };

    return this.listaDeProdutos.push(novoProduto);
  },
  excluirProduto: function (id) {
    console.log(id);
    const novaListaDeProdutos = this.listaDeProdutos.filter(
      (produto) => produto.id !== id
    );

    if (novaListaDeProdutos.length >= this.listaDeProdutos.length) return false;

    this.listaDeProdutos = novaListaDeProdutos;

    return true;
  },
};

module.exports = produtoModel;
