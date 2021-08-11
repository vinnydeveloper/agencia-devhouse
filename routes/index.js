const { Router } = require("express");
const express = require("express");

const routes = express.Router();

const indexController = require("../controllers");

routes.get("/", indexController.exibirHome);

routes.get("/home", indexController.redirectHome);

routes.get("/manutencao", indexController.exibirManutencao);

routes.get("/blog", (req, res) => {
  res.sendFile(path.resolve("views", "blog.html"));
});

routes.get("/contato", (req, res) => {
  res.sendFile(path.resolve("views", "contato.html"));
});

routes.post("/receber-contato", (req, res) => {
  res.send("Contato recebido por:" + req.body.nome);
});

routes.get("/depoimentos", indexController.exibirDepoimentos);

routes.get("/cadastrar-depoimento", indexController.exibirFormDepoimento);
routes.post("/cadastrar-depoimento", indexController.cadastrarDepoimento);

module.exports = routes;
