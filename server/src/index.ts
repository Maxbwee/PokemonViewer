import express, { type Request, type Response } from "express";
import pokemonRouter from './routes/pokemon.js';

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(express.json());

app.use("/api/pokemon", pokemonRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
