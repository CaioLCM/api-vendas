import express from "express";
import {rotas} from "./routes";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(cors());
app.use(express.json());
app.use(rotas);
app.use(errorHandler);

export {app};