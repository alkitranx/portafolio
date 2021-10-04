const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config');
const user = require('./user')

class Contact extends Model{}

Contact.init({
    id: {
        type: DataTypes.INTEGER,
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
    github: {
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

user.hasOne(Contact, {foreignKey: "userId"});
Contact.belongsTo(user, {foreignKey: "userId"})
  

  module.exports = Contact;