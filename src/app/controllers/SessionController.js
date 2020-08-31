import bcrypt, { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

import Client from '../models/Client';
import Administrator from '../models/Administrator';

import authConfig from '../../config/auth';

class SessionController {
  async create(req, res, next) {
    const { login, senha } = req.body;

    const client = await Client.findOne({ where: { login }});
    const administrator = await Administrator.findOne({ where: { login }});

    const user = client ? client : administrator;

    if(!user) {
      return res.status(400).json({
        errorMessage: 'Login ou senha incorretos'
      });
    }

    const passwordDecrypted = await bcrypt.compare(senha, user.senha);

    if(!passwordDecrypted) {
      return res.status(400).json({
        errorMessage: 'Login ou senha incorretos'
      });
    }

    // user OK

    const { id } = user;
    const { secret, expiresIn } = authConfig.jwt;

    const token = jwt.sign({ id }, secret, {
      expiresIn
    });

    await user.update({ token });

    return res.status(200).json({ token });
  }

  async destroy(req, res) {
    const client = await Client.findByPk(req.params.id);
    const administrator = await Administrator.findOne({ where: { login }});

    const user = client ? client : administrator;
    
    if(!user) {
      return res.status(400).json({
        errorMessage: "Usuário não encontrado."
      });
    }

    user.update({ token: null })

    res.status(200).json();
  }
}

export default new SessionController;