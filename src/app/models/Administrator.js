import { Sequelize, DataTypes } from 'sequelize';

import databaseConfig from '../../config/database';

const sequelize = new Sequelize(databaseConfig);

const Administrator = sequelize.define('Administrator', {
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  login: { type: DataTypes.STRING, allowNull: false },
  senha: { type: DataTypes.STRING, allowNull: false },
  token: { type: DataTypes.STRING },
}, {});

export default Administrator;