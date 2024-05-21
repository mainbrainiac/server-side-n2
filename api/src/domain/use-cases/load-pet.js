export const LoadPet = {
  load: function(codigo_pet) {
    if (codigo_pet === null || codigo_pet === undefined) {
      throw new Error('O código do pet é obrigatório.');
    }
    const pet = new Pet(codigo_pet, 'Rex', 'Macho');
    return pet;
  }
};