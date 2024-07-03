import express, { Application, Request, Response } from 'express';
import path from 'path';
import axios from 'axios';

const app: Application = express();

app.use(express.json());

// Serve the home page
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
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
