import PetRepository from '../repositories/pet-repository.js';

const PetController = {
  create: async (req, res) => {
    try {
      const petData = req.body;
      const result = await PetRepository.create(petData);
      res.status(201).json({ message: 'Pet criado com sucesso.', result });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar pet.', error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const petData = req.body;
      petData.codigo_pet = req.params.codigo_pet;
      const result = await PetRepository.update(petData);
      res.status(200).json({ message: 'Pet atualizado com sucesso.', result });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar pet.', error: error.message });
    }
  },

  load: async (req, res) => {
    try {
      const codigo_pet = req.params.codigo_pet;
      const pet = await PetRepository.load(codigo_pet);
      res.status(200).json(pet);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao carregar pet.', error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const codigo_pet = req.params.codigo_pet;
      await PetRepository.delete(codigo_pet);
      res.status(200).json({ message: 'Pet deletado com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar pet.', error: error.message });
    }
  },

  loadAll: async (req, res) => {
    try {
      const pets = await PetRepository.loadAll();
      res.status(200).json(pets);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao carregar todos os pets.', error: error.message });
    }
  }
};

export default PetController;
