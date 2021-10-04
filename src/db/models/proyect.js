const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config');
const user = require('./user');

class Proyect extends Model{}

Proyect.init({
    id: {
        type: DataTypes.INTEGER, 
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
    repository: {
        type: DataTypes.STRING,
        allowNull: true,
        
    }
  }, {   
    sequelize,
    modelName: "proyect"
  });

user.hasMany(Proyect, {foreignKey: "userId"});
Proyect.belongsTo(user, {foreignKey: "userId"});
  

  module.exports = Proyect;