const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config');

class Comments extends Model{}

Comments.init({
    id: {
        type: DataTypes.INTEGER,// TODO es una clave foranea que deberia venir del modelo proyects
        allowNull: false,
        unique:true,
        primaryKey: true,
        autoIncrement: true
      },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false      
    },
    
  }, {   
    sequelize,
    modelName: "comment"
  });
  

  module.exports = Comments;