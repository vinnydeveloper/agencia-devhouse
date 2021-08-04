const express = require("express");
const path = require("path");
const routes = express.Router();

const depoimentos = require("../models/depoimentos");

routes.get("/", (req, res) => {
  const usuario = undefined;
  res.render("home", { titulo: "Sua empresa vai ser incrivel!", usuario });
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

routes.get("/depoimentos", (req, res) => {
  res.render("depoimentos", { depoimentos, titulo: "Depoimentos" });
});

module.exports = routes;
