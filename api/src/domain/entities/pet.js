class Pet {
  constructor(codigo_pet, nome_pet, genero_pet) {
    if (codigo_pet === null || codigo_pet === undefined) {
      throw new Error('O código do pet é obrigatório.');
    }
    this.codigo_pet = codigo_pet;
    this.nome_pet = nome_pet;
    this.genero_pet = genero_pet;
  }
}

module.exports = Pet;