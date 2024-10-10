import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Mariana Cardoso",
    profissão: "Dev",
    aposta: "sim",
    suspeita: "alto"
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Marcelo vei",
    profissão: "Docente",
    aposta: "Não",
    suspeita: "baixo"
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Felipe Dev",
    profissão: "Cozinheiro",
    aposta: "sim",
    suspeita: "médio"
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Marcelo Jordão",
    profissão: "Protético",
    aposta: "Não",
    suspeita: "baixo",
  },
];