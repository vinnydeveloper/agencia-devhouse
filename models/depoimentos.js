const depoimentos = [
  {
    autor: "Vinny",
    titulo: "Depoimento Fake",
    descricao: "jsbfjs sjfshjfb jhgcuyhsvb",
  },
  {
    autor: "Mario",
    titulo: "Depoimento Fake II",
    descricao: "jsbfjs sjfshjfb jhgcuyhsvb",
  },
  {
    autor: "Hendy",
    titulo: "Depoimento Fake III",
    descricao: "jsbfjs sjfshjfb jhgcuyhsvb",
  },
  {
    autor: "Leandro",
    titulo: "Depoimento Fake VI",
    descricao: "jsbfjs sjfshjfb jhgcuyhsvb",
  },
];

function cadastrarDepoimento(autor, titulo, descricao) {
  return depoimentos.push({
    autor,
    titulo,
    descricao,
  });
}
module.exports = { depoimentos, cadastrarDepoimento };
