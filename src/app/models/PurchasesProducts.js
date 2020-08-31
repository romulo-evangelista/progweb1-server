import { Sequelize, DataTypes } from 'sequelize';

import databaseConfig from '../../config/database';

const sequelize = new Sequelize(databaseConfig);

const PurchasesProducts = sequelize.define('PurchasesProducts', {
  purchase_id: {
    type: DataTypes.NUMBER,
    references: 'purchases',
    referencesKey: 'id',
  }, product_id: {
    type: DataTypes.NUMBER,
    references: 'products',
    referencesKey: 'id',
  }, quant: { type: DataTypes.NUMBER, allowNull: false }
}, {
  tableName: 'purchases_products',
});

export default PurchasesProducts;