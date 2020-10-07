import { Sequelize, DataTypes } from 'sequelize';

import databaseConfig from '../../config/database';

import Client from './Client';

const sequelize = new Sequelize(databaseConfig);

export const Purchase = sequelize.define('purchases', {
  datetime: { type: DataTypes.DATE, allowNull: false },
  client_id: {
    type: DataTypes.NUMBER,
    references: 'clients',
    referencesKey: 'id',
  },
}, {});

export default Purchase;