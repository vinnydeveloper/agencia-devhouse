const express = require("express");

const usuarioController = require("../controllers/usuarios");

const routes = express.Router();

routes.get("/login", usuarioController.exibirLogin);

routes.get("/cadastro", usuarioController.exibirCadastro);
routes.post("/salvarUsuario", usuarioController.salvarUsuario);

module.exports = routes;