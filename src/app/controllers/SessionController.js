import bcrypt from 'bcrypt';
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

    const userType = client ? 'client' : 'admin';

    if(!user) {
      return res.status(400).json({
        success: false,
        message: 'Login ou senha incorretos'
      });
    }

    const passwordDecrypted = await bcrypt.compare(senha, user.senha);

    console.log(passwordDecrypted);

    if(!passwordDecrypted) {
      return res.status(400).json({
        success: false,
        message: 'Login ou senha incorretos'
      });
    }

    // user OK

    const { id } = user;
    const { secret, expiresIn } = authConfig.jwt;

    const token = jwt.sign({ id }, secret, {
      expiresIn
    });

    await user.update({ token });

    return res.status(200).json({ id, token, userType });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const client = await Client.findByPk(id);
    const administrator = await Administrator.findByPk(id);

    const user = client ? client : administrator;
    
    if(!user) {
      return res.status(400).json({
        success: false,
        message: "Usuário não encontrado."
      });
    }

    user.update({ token: null })

    res.status(200).json();
  }
}

export default new SessionController;