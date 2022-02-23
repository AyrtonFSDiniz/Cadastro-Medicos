'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  medicos.init({
    id: DataTypes.NUMBER,
    nome: DataTypes.STRING,
    CRM: DataTypes.NUMBER,
    telefone_fixo: DataTypes.NUMBER,
    telefone_celular: DataTypes.NUMBER,
    cep: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'medicos',
  });
  return medicos;
};