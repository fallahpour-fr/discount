const { Commodity ,Discount} = require('../models');

module.exports = {
    getAllCommodities:async (req, res, next) => {
        try {
            const commodities = await Commodity.findAll();
            res.status(200).json(commodities);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    },
    createCommodity:async (req, res, next) => {
        const { name, details, price } = req.body;

        try {
          const commodity = await Commodity.create({ id, name, details, price });
          res.status(201).json(commodity);
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
    },
    discount:async (req, res, next) => {
      
    },
    addDiscountToCommodity : async (req, res) => {
      const { commodityId, discountId } = req.body;
    
      try {
        const commodity = await Commodity.findByPk(commodityId);
        const discount = await Discount.findByPk(discountId);
    
        if (!commodity || !discount) {
          return res.status(404).json({ message: 'Commodity or Discount not found' });
        }
    
        await commodity.addDiscount(discount); // This will create an entry in the join table
        res.status(200).json({ message: 'Discount added to commodity successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
}