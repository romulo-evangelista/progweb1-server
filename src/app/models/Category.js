import { Sequelize, DataTypes } from 'sequelize';

import databaseConfig from '../../config/database';

const sequelize = new Sequelize(databaseConfig);

const Category = sequelize.define('Category', {
  descricao: { type: DataTypes.TEXT, allowNull: false },
}, {});

export default Category;