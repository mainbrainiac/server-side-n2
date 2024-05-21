export const DeletePet = {
  delete: function(codigo_pet) {
    if (codigo_pet === null || codigo_pet === undefined) {
      throw new Error('O código do pet é obrigatório.');
    }
    console.log(`Pet com código ${codigo_pet} deletado.`);
  }
};