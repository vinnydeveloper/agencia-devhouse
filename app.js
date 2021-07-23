const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/manutencao", (req, res) => {
  res.sendFile(__dirname + "/views/manutencao.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/contato", (req, res) => {
  res.sendFile(__dirname + "/views/contato.html");
});

app.post("/receber-contato", (req, res) => {
  console.log(req.body);
  res.send("Contato recebido por:" + req.body.nome);
});

app.listen(3000);

// tem criar o arquivo home em HTML que contenha um titulo e um paragrafo
// esse arquivo vai ser exibido tanto na rota / quanto na rota /home
