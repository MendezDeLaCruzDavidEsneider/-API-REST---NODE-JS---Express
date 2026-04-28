import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/user';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(express.json());

//Rutas
//USERS
app.use('/api/users', router);
//PRUEBAS
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: '¡Bienvenido a la API REST!',
    version: '1.0.0'
  });
});
// Manejo de errores para rutas no encontradas
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Ruta no encontrada'
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});