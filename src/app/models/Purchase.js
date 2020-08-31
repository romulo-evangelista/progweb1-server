import { Sequelize, DataTypes } from 'sequelize';

import databaseConfig from '../../config/database';

const sequelize = new Sequelize(databaseConfig);

const Purchase = sequelize.define('Purchase', {
  datetime: { type: DataTypes.DATE, allowNull: false },
  client_id: {
    type: DataTypes.NUMBER,
    references: 'clients',
    referencesKey: 'id',
  },
}, {});

export default Purchase;