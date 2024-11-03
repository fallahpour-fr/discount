'use strict';

module.exports = (sequelize, DataTypes) => {
  class Commodity extends sequelize.Sequelize.Model {
    static associate(models) {
      Commodity.belongsToMany(models.Discount, { through: 'CommoditiDiscount', foreignKey: 'DiscountId', otherKey: 'discountId' });
  }
  }

  Commodity.init(
    {
     id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
     name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detailes: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Commodity',
    }
  );

  return Commodity;
};