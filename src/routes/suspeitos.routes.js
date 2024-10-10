import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Mariana Cardoso",
    profissao: "Dev",
    aposta: "sim",
    suspeita: "alto"
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Marcelo vei",
    profissao: "Docente",
    aposta: "não",
    suspeita: "baixo"
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Felipe Dev",
    profissao: "Cozinheiro",
    aposta: "sim",
    suspeita: "médio"
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Marcelo Jordão",
    profissao: "Protético",
    aposta: "não",
    suspeita: "baixo",
  },
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });

  // Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
  const { nome, profissao, aposta, suspeita } = req.body; 
  
   // Validação dos campos nome e profissao
   if (!nome || !profissao) {
    return res.status(400).send({
      message: "O nome ou a profissao não foi preenchido!.",
    });
  }

    // Validação da suspeita
    if (suspeita != "médio" && suspeita != "baixo" && suspeita != "alto") {
      return res.status(400).send({
        message:
          "A suspeita deve ser classificado como baixo, médio ou alto!.!",
      });
    }

   // Criação de um novo suspeito
   const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
   profissao,
    aposta,
    suspeita,
  };

  // Adiciona o novo suspeito ao array de suspeitos
  suspeitos.push(novoSuspeito);

  return res.status(201).json({
    message: "Suspeito cadastrado com sucesso!",
    novoSuspeito,
  });
});

// Rota para buscar um suspeito pelo id
suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  
  // Busca um suspeito pelo id no array de suspeitos
  const suspeito = suspeitos.find((suspect) => suspect.id == id);

// Verifica se o suspeito foi encontrado
if (!suspeito) {
  return res
    .status(404)
    .json({ message: `Suspeito com id ${id} não encontrado!` });
}


return res.status(200).json(suspeito);
});

// Rota para atualizar um suspeito pelo id
suspeitosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const {  nome, profissao, aposta, suspeita } = req.body;

  // Busca um suspeito pelo id no array de suspeitos
  const suspeito = suspeitos.find((suspect) => suspect.id == id);

  
  // Verifica se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `Suspeito com id ${id} não encontrado!` });
  }
  
   // Validação dos campos nome e profissao
   if (!nome || !profissao) {
    return res.status(400).send({
      message: "O nome ou o profissao não foi preenchido, criança aleatória!",
    });
  }

  // Validação da suspeita
  if (suspeita != "médio" && suspeita != "baixo" && suspeita != "alto") {
    return res.status(400).send({
      message:
        "A suspeita deve ser classificado como baixo, médio ou alto!.!",
    });
  }
  suspeito.nome = nome;
  suspeito.profissao = profissao;
  suspeito.aposta = aposta;
  suspeito.suspeita = suspeita;

  return res.status(200).json({
    message: "suspeito atualizado com sucesso!",
    suspeito,
  });
});


  export default suspeitosRoutes;