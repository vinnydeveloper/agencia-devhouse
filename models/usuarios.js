const { v4: generateId } = require("uuid");
const fs = require("fs");
const path = require("path");

const usuariosJson = require("../databases/usuarios.json");

const usuarioModel = {
  listaDeUsuarios: usuariosJson,
  cadastrarUsuario: function (nome, email, senha) {
    const novoUsuario = {
      id: generateId(),
      nome,
      email,
      senha,
    };

    this.listaDeUsuarios.push(novoUsuario);

    this.atualizaJson();

    return;
  },
  buscarUsuarioPorEmail(email) {
    const usuario = this.listaDeUsuarios.find(
      (usuario) => usuario.email == email
    );

    if (!usuario) return false;

    return usuario;
  },
  excluirUsuario: function (id) {
    console.log(id);
    const novaListaDeUsuarios = this.listaDeUsuarios.filter(
      (produto) => usuario.id !== id
    );

    if (novaListaDeUsuarios.length >= this.listaDeUsuarios.length) return false;

    this.listaDeUsuarios = novaListaDeUsuarios;

    this.atualizaJson();
    return true;
  },

  atualizaJson() {
    const listaEmJson = JSON.stringify(this.listaDeUsuarios);
    fs.writeFileSync(path.resolve("databases", "usuarios.json"), listaEmJson);
  },
};

module.exports = usuarioModel;
