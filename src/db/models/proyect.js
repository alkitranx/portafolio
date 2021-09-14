const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config');

class Proyect extends Model{}

Proyect.init({
    id: {
        type: DataTypes.INTEGER, // TODO falta creal a asociacion con la tabla user
        allowNull: false,
        unique:true,
        primaryKey: true,
        autoIncrement: true
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    description: {
      type: DataTypes.STRING,
      allowNull: false      
    },
    images: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
  }, {   
    sequelize,
    modelName: "proyect"
  });
  

  module.exports = Proyect;