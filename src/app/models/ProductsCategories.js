import { Sequelize, DataTypes } from 'sequelize';

import databaseConfig from '../../config/database';

const sequelize = new Sequelize(databaseConfig);

export const ProductsCategories = sequelize.define('products_categories', {
  product_id: {
    type: DataTypes.NUMBER,
    references: 'products',
    referencesKey: 'id',
    allowNull: false,
  }, category_id: {
    type: DataTypes.NUMBER,
    references: 'categories',
    referencesKey: 'id',
    allowNull: false,
  },
}, {
  tableName: 'products_categories',
});