import app from './config/express.js';
import petRoutes from './routes/pet-routes.js';

const PORT = process.env.PORT || 3000;

app.use('/api', petRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
