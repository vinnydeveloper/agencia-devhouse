const express = require("express");

const produtoController = require("../controllers/produtos");
const verificaAdmin = require("../middlewares/admin");
const upload = require("../middlewares/uploads");
const routes = express.Router();

routes.get("/admin/cadastro-produto", produtoController.cadastrarProduto);
routes.get("/admin/produtos", produtoController.listarProdutosAdmin);
routes.post(
  "/salvar-produto",
  upload.single("imagem"),
  produtoController.salvarProduto
);
routes.delete("/deletar-produto/:id", produtoController.deletarProduto);

module.exports = routes;
