'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class especialidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  especialidades.init(
    {
      nome_especialidade: DataTypes.CHAR,
      medicosId: DataTypes.INT,
    },
    {
      sequelize,
      modelName: 'especialidades',
    },
  );
  return especialidades;
};
