const express = require("express");

const routes = express.Router();

routes.get("/produtos/lista", (req, res) => {
  res.send("Pagina de produtos");
});

routes.get("/produto/:id", (req, res) => {
  if (typeof Number(req.params.id) !== "number") {
    return res.send("Deve digitar um numero");
  }

  res.send("Pagina de produtos");
});
module.exports = routes;
