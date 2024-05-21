export const AddPet = {
  add: function(pet) {
    try {
      const newPet = new Pet(pet.codigo_pet, pet.nome_pet, pet.genero_pet);
      return newPet;
    } catch (error) {
      throw error;
    }
  }
};
