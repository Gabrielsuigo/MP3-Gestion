import express from "express";
import indexRouter from "./routes/indexRouter";
import cors from 'cors';

const server = express();

// MIDDLEWARES
server.use(express.json());
server.use(cors());

server.use(indexRouter);

export default server;




