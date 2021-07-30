const express = require("express");
const rotasDeProdutos = require("./routes/produtos");
const rotas = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(rotasDeProdutos);
app.use(rotas);

app.listen(3000);

// tem criar o arquivo home em HTML que contenha um titulo e um paragrafo
// esse arquivo vai ser exibido tanto na rota / quanto na rota /home
