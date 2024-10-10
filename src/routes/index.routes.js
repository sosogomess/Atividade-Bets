import { Router } from "express";
import suspeitoRoutes from "./suspeitos.routes.js"

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "servidor rodando" });
});

routes.use("/suspeitos", suspeitoRoutes);

export default routes;