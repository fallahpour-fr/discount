'use strict';

module.exports = (sequelize, DataTypes) => {
  class Discount extends sequelize.Sequelize.Model {
    static associate(models) {
      Discount.belongsToMany(models.Commodity, { through: 'DiscountCommodits', foreignKey: 'CommoditId', otherKey: 'CommoditId' });
  }
  }

  Discount.init(
    {
     id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    percentage: {
        type: DataTypes.STRING,
        allowNull: false,
     },
    },
    {
      sequelize,
      modelName: 'Discount',
    }
  );

  return Discount;
};