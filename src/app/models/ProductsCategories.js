import { Sequelize, DataTypes } from 'sequelize';

import databaseConfig from '../../config/database';

const sequelize = new Sequelize(databaseConfig);

const ProductsCategories = sequelize.define('ProductsCategories', {
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

export default ProductsCategories;