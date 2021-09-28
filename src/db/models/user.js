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
    password: {
      type: DataTypes.STRING,
      allowNull: false      
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active',
      allowNull: false
  },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      allowNull: false,
      defaultValue: 'user'
  }
  }, {   
    sequelize,
    modelName: "user"
  });
  

  module.exports = User;