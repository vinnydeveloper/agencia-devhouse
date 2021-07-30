const express = require("express");
const path = require("path");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.sendFile(path.resolve("views", "home.html"));
});

routes.get("/home", (req, res) => {
  res.redirect("/");
});

routes.get("/manutencao", (req, res) => {
  res.sendFile(path.resolve("views", "manutencao.html"));
});

routes.get("/blog", (req, res) => {
  res.sendFile(path.resolve("views", "blog.html"));
});

routes.get("/contato", (req, res) => {
  res.sendFile(path.resolve("views", "contato.html"));
});

routes.post("/receber-contato", (req, res) => {
  res.send("Contato recebido por:" + req.body.nome);
});

module.exports = routes;
