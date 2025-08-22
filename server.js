import express from "express";
import princess from "./src/data/princess.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Bem-vindos(as) ao reino mágico das Princesas Disney! ✨👑");
});
app.get("/princesas", (req, res) => {
  res.json(princess);
});
app.get("/princesas/id/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const princesa = princess.find((p) => p.id === id);
  if (princess) {
    res.status(200).json(princesa);
  }
  res.status(404)({
    error: "princesa não encontrada",
  });
});

app.get("/princesas/nome/:nome", (req, res) => {
  let nome = req.params.nome.toLocaleLowerCase();
  const princesa = princess.filter((b) =>
    b.nome.toLocaleLowerCase().includes(nome)
  );
  if (princess) {
    res.status(200).json(princesa);
  }
  res.status(404)({
    error: "princesa não encontrada",
  });
});

app.get("/princesas/reino/:reino", (req, res) => {
  let reino = req.params.reino.toLocaleLowerCase();
  const princesa = princess.filter((b) =>
    b.reino.toLocaleLowerCase().includes(reino)
  );
  if (princess) {
    res.status(200).json(princesa);
  }
  res.status(404)({
    error: "princesa não encontrada",
  });
});

app.get("/princesas/ativas/sim", (req, res) => {
  const result = princess.filter((p) => p.ativa === true);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404)({
      error: "princesa não encontrada",
    });
  }
});

app.get("/princesas/ativas/nao", (req, res) => {
  const result = princess.filter((p) => !p.ativa === true);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404)({
      error: "princesa não encontrada",
    });
  }
});

app.listen(port, () => {
  console.log(`Open server port in ${port} http://localhost:3000`);
});
