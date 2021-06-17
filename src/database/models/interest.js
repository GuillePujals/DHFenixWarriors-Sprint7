'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Interest.belongsTo(models.User);
    }
  };
  Interest.init({
    user_id: DataTypes.INTEGER,
    interest: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Interest',
  });
  return Interest;
};