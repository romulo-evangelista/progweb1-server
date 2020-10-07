import { Sequelize, DataTypes } from 'sequelize';

import databaseConfig from '../../config/database';

const sequelize = new Sequelize(databaseConfig);

export const Category = sequelize.define('categories', {
  descricao: { type: DataTypes.TEXT, allowNull: false },
}, {});

export default Category;