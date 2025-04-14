import { Router } from "express";

const rotas = Router();

rotas.get("/", (req, res) => {
    res.status(200).json({"message": "Sucesso ainnnn"});
})

export { rotas }; 