// migrations/xxxx-create-commodity-discount.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CommodityDiscount', {
      commodityId: {
        type: Sequelize.STRING,
        references: {
          model: 'Commodities', // Name of the commodity table
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      discountId: {
        type: Sequelize.STRING,
        references: {
          model: 'Discounts', // Name of the discount table
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CommodityDiscount');
  }
};
