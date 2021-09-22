const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config');
const proyect = require('./proyect')

class Comments extends Model{}

Comments.init({
    id: {
        type: DataTypes.INTEGER,
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
  
  // relacion de la tabla
  proyect.hasMany(Comments, {foreignKey: "proyectId"});
  Comments.belongsTo(proyect, {foreignKey: "proyectId"})

  module.exports = Comments;