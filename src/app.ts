import express, { Application, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import axios from 'axios';

const app: Application = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Serve the home page
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/pages/index.html'));
});

// Route to communicate with the example microservice
app.get('/example', async (req: Request, res: Response) => {
    try {
        const response = await axios.get('http://localhost:4000/example');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default app;
