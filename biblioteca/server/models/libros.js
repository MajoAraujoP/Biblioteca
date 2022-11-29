'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class libros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  libros.init({
    usuarioId: DataTypes.BIGINT,
    nombre: DataTypes.STRING,
    categoria: DataTypes.STRING,
    autor: DataTypes.STRING,
    fechaInPrestamo: DataTypes.DATEONLY,
    fechaFinPrestamo: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'libros',
  });
  return libros;
};