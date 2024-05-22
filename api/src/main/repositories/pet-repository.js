import connect from '../../infra/connection.js'

const PetRepository = {
  create: async function(petData) {
    try {
      const newPet = new Pet(petData.codigo_pet, petData.nome_pet, petData.genero_pet);
      let sql = "INSERT INTO pet (codigo_pet, nome_pet, genero_pet) VALUES(?, ?, ?);";
      let values = [newPet.codigo_pet, newPet.nome_pet, newPet.genero_pet]
      let result = await connect.query(sql, values);
      return result;
    } catch (error) {
      throw new Error('Erro ao inserir pet no repositório: ' + error);
    }
  },
  
  update: async function(petData) {
    try {
      const updatedPet = new Pet(petData.codigo_pet, petData.nome_pet, petData.genero_pet);
      let sql = "UPDATE pet SET nome_pet = ?, genero_pet = ? WHERE codigo_pet = ?;";
      let values = [updatedPet.nome_pet, updatedPet.genero_pet, updatedPet.codigo_pet];
      let result = await connect.query(sql, values);
      return result;
    } catch (error) {
      throw new Error('Erro ao atualizar pet no repositório: ' + error);
    }
  },
  
  delete: async function(codigo_pet) {
    try {
      if (codigo_pet === null || codigo_pet === undefined) {
        throw new Error('O código do pet é obrigatório.');
      }
      
      let sql = "DELETE FROM pet WHERE codigo_pet = ?;";
      let result = await connect.query(sql, [codigo_pet]);
      
      console.log(`Pet com código ${codigo_pet} deletado.`);
      return result;
    } catch (error) {
      throw new Error('Erro ao deletar pet no repositório: ' + error);
    }
  },
  
  load: async function(codigo_pet) {
    try {
      if (codigo_pet === null || codigo_pet === undefined) {
        throw new Error('O código do pet é obrigatório.');
      }
      
      let sql = "SELECT * FROM pet WHERE codigo_pet = ?;";
      let result = await connect.query(sql, [codigo_pet]);
      
      if (result.length === 0) {
        throw new Error(`Pet com código ${codigo_pet} não encontrado.`);
      }
      
      const pet = new Pet(result[0].codigo_pet, result[0].nome_pet, result[0].genero_pet);
      return pet;
    } catch (error) {
      throw new Error('Erro ao carregar pet no repositório: ' + error);
    }
  },

  loadAll: async function() {
    try {
      const sql = "SELECT * FROM pet";
      const [rows] = await pool.query(sql);
      
      return rows.map(row => new Pet(row.codigo_pet, row.nome_pet, row.genero_pet));
    } catch (error) {
      throw new Error('Erro ao carregar todos os pets no repositório: ' + error.message);
    }
  }
};

export default PetRepository;