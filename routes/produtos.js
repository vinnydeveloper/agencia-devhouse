const express = require("express");

const produtoController = require("../controllers/produtos");

const routes = express.Router();

routes.get("/admin/cadastro-produto", produtoController.cadastrarProduto);
routes.get("/admin/produtos", produtoController.listarProdutosAdmin);
routes.post("/salvar-produto", produtoController.salvarProduto);

module.exports = routes;
