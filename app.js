const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const rotasDeProdutos = require("./routes/produtos");
const rotasDeUsuarios = require("./routes/usuarios");
const rotas = require("./routes");

const { append } = require("vary");

const app = express();
// configurando o template engine
app.set("view engine", "ejs");
app.set("views", path.resolve("views"));
app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(rotasDeProdutos);
app.use(rotasDeUsuarios);

app.use(rotas);

app.listen(process.env.PORT || 80);

// tem criar o arquivo home em HTML que contenha um titulo e um paragrafo
// esse arquivo vai ser exibido tanto na rota / quanto na rota /home
