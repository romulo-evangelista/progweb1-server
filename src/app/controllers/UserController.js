import bcrypt from 'bcrypt';

import Client from '../models/Client';

class UserController {
  async list(req, res) {
    const clients = await Client.findAll();

    if(!clients) {
      return res.status(400).json({
        success: false,
        message: "Não há usuários cadastrados."
      });
    }
  
    return res.status(200).json(clients);
  }
  
  async create(req, res) {
    const { nome, endereco, email, login, senha } = req.body;

    const emailExists = await Client.findOne({ where: { email }});

    if(emailExists) {
      return res.status(400).json({
        success: false,
        message: "Email já utilizado."
      });
    }

    const loginExists = await Client.findOne({ where: { login }});

    if(loginExists) {
      return res.status(400).json({
        success: false,
        message: "Login já utilizado."
      });
    }
    
    const encryptedPass = bcrypt.hashSync(senha, 8);

    const client = await Client.create({
      nome,
      endereco,
      email,
      login,
      senha: encryptedPass,
    });
  
    return res.status(200).json(client);
  }

  async findOne(req, res) {
    const client = await Client.findByPk(req.params.id);
  
    if(!client) {
      return res.status(400).json({
        success: false,
        message: "Usuário não encontrado."
      });
    }

    return res.status(200).json(client);
  }

  async update(req, res) {
    const { nome, endereco, email, login, senha } = req.body;
    
    const client = await Client.findByPk(req.params.id);

    if(!client) {
      return res.status(400).json({
        success: false,
        message: "Usuário não encontrado."
      });
    }
  
    await client.update({
      nome,
      endereco,
      email,
      login,
      senha,
    });
  
    return res.status(200).json(client);
  }

  async delete(req, res) {
    const client = await Client.findByPk(req.params.id);
    
    if(!client) {
      return res.status(400).json({
        success: false,
        message: "Usuário não encontrado."
      });
    }

    await client.destroy();
  
    return res.status(200).json();
  }
}

export default new UserController;