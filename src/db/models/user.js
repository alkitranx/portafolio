const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config');

class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:true,
        primaryKey: true,
        autoIncrement: true
      },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false      
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
  }, {   
    sequelize,
    modelName: "user"
  });
  

  module.exports = User;