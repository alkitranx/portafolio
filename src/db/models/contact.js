const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config');

class Contact extends Model{}

Contact.init({
    id: {
        type: DataTypes.INTEGER, // TODO es una clave foranea del modelo users
        allowNull: false,
        unique:true,
        primaryKey: true,
        autoIncrement: true
      },
    email: {
        type: DataTypes.STRING,
        allowNull: true
      },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true      
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    linkedin: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }},{   
    sequelize,
    modelName: "contact"
  });
  

  module.exports = Contact;