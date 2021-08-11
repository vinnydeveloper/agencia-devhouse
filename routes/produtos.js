const express = require("express");

const produtoController = require("../controllers/produtos");

const routes = express.Router();

routes.get("/produtos/lista", produtoController.listarProdutos);

routes.get("/produto/:id", (req, res) => {
  if (typeof Number(req.params.id) !== "number") {
    return res.send("Deve digitar um numero");
  }

  res.send("Pagina de produtos");
});
module.exports = routes;
