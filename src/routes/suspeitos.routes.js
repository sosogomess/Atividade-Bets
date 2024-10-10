import { Router } from "express";

const suspeitoRoutes = Router();

// Array com suspeitos pré-cadastrados
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Krypton",
    temperatura: -30.0,
    agua: false,
    atm: ["Kriptonita", "Oxigênio", "Nitrogênio"],
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Xandar",
    temperatura: 25.0,
    agua: true,
    atm: ["Nitrogênio", "Oxigênio", "Hidrogênio"],
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Asgard",
    temperatura: 5.0,
    agua: false,
    atm: ["Magia", "Energia Cósmica", "Oxigênio"],
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Apokolips",
    temperatura: 50.0,
    agua: false,
    atm: ["Fumaça", "Dióxido de Enxofre", "Monóxido de Carbono"],
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Knowhere",
    temperatura: -10.0,
    agua: true,
    atm: ["Hidrogênio", "Nitrogênio", "Partículas Cósmicas"],
  },
];

// Rota para listar todos os suspeitos
suspeitoRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});

// Rota para cadastrar um novo planeta
suspeitoRoutes.post("/", (req, res) => {
  const { nome, temperatura, agua, atm } = req.body;

  // Validação dos campos obrigatórios
  if (!nome || !temperatura || !agua) {
    return res.status(400).json({
      message: "Os campos nome, temperatura e água são obrigatórios!",
    });
  }

  // Validação de existência de água
  if (agua != "sim" && agua != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'!",
    });
  }

  // Criação de um novo planeta
  const novoPlaneta = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    temperatura,
    agua,
    atm: atm || [], // Valor padrão caso atm não seja enviado
  };

  // Adiciona o novo planeta ao array de suspeitos
  suspeitos.push(novoPlaneta);

  return res.status(201).json({
    message: "Planeta cadastrado com sucesso!",
    novoPlaneta,
  });
});

// Rota para buscar um planeta pelo id
suspeitoRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um planeta pelo id no array de suspeitos
  const planeta = suspeitos.find((planet) => planet.id == id);

  // Verifica se o planeta foi encontrado
  if (!planeta) {
    return res
      .status(404)
      .json({ message: `Planeta com id ${id} não encontrado!` });
  }

  return res.status(200).json(planeta);
});

// Rota para atualizar um planeta pelo id
suspeitoRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, temperatura, agua, atm } = req.body;

  // Busca um planeta pelo id no array de suspeitos
  const planeta = suspeitos.find((p) => p.id == id);

  // Validação dos campos obrigatórios
  if (!nome || !temperatura || !agua) {
    return res.status(400).json({
      message: "Os campos nome, temperatura e água são obrigatórios!",
    });
  }

  // Validação de existência de água
  if (agua != "sim" && agua != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'!",
    });
  }

  planeta.nome = nome;
  planeta.temperatura = temperatura;
  planeta.agua = agua;
  planeta.atm = atm || [];

  return res.status(200).json({
    message: "Planeta atualizado com sucesso!",
    planeta,
  });
});

// Rota para deletar um planeta
suspeitoRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um planeta pelo id no array de suspeitos
  const planeta = suspeitos.find((planet) => planet.id == id);

  // Verifica se o planeta foi encontrado
  if (!planeta) {
    return res
      .status(404)
      .json({ message: `Planeta com id ${id} não encontrado!` });
  }

  // Remove o planeta do array de suspeitos
  suspeitos = suspeitos.filter((planet) => planet.id != id);

  return res.status(200).json({
    message: "Planeta removido com sucesso!",
    planeta,
  });
});

export default suspeitoRoutes;