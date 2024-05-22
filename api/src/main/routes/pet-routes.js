import express from 'express';
import PetController from '../controllers/pet-controller.js';

const router = express.Router();

router.post('/pets', PetController.create);
router.get('/pets', PetController.loadAll);
router.put('/pets/:codigo_pet', PetController.update);
router.get('/pets/:codigo_pet', PetController.load);
router.delete('/pets/:codigo_pet', PetController.delete);

export default router;
