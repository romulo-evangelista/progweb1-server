import { Sequelize, DataTypes } from 'sequelize';

import databaseConfig from '../../config/database';
import Product from './Product';
import Purchase from './Purchase';

const sequelize = new Sequelize(databaseConfig);

export const PurchasesProducts = sequelize.define('purchases_products', {
  purchase_id: {
    type: DataTypes.NUMBER,
    references: {
      model: Purchase,
      key: 'id'
    },
  }, product_id: {
    type: DataTypes.NUMBER,
    references: {
      model: Product,
      key: 'id'
    }
  }, quant: { type: DataTypes.NUMBER, allowNull: false }
}, {
  tableName: 'purchases_products',
});

export default PurchasesProducts;