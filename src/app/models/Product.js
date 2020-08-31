import { Sequelize, DataTypes } from 'sequelize';

import databaseConfig from '../../config/database';

const sequelize = new Sequelize(databaseConfig);

const Product = sequelize.define('Product', {
  descricao: { type: DataTypes.TEXT, allowNull: false },
  preco: { type: DataTypes.NUMBER, allowNull: false },
  quantidade: { type: DataTypes.NUMBER, allowNull: false },
}, {});

export default Product;