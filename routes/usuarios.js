const express = require("express");

const usuarioController = require("../controllers/usuarios");

const routes = express.Router();

routes.get("/login", usuarioController.exibirLogin);
routes.post("/fazerLogin", usuarioController.fazerLogin);

routes.get("/cadastro", usuarioController.exibirCadastro);
routes.post("/salvarUsuario", usuarioController.salvarUsuario);

module.exports = routes;
