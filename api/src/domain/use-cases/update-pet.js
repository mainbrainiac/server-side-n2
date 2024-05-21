export const UpdatePet = {
  update: function(pet) {
    try {
      const updatedPet = new Pet(pet.codigo_pet, pet.nome_pet, pet.genero_pet);
      return updatedPet;
    } catch (error) {
      throw error;
    }
  }
};
