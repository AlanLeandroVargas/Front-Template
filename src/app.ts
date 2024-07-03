import express, { Application, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import axios from 'axios';

const app: Application = express();

// Habilitar CORS para todas las rutas
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Da la pagina inicial en la ruta "localhost:3000"
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/pages/index.html'));
});

export default app;
