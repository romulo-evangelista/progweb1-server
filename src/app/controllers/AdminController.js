import bcrypt from 'bcrypt';

import Administrator from '../models/Administrator';

class AdminController {
  async list(req, res) {
    const admins = await Administrator.findAll();

    if(!admins) {
      return res.status(400).json({
        success: false,
        message: "Não há administradores cadastrados."
      });
    }
  
    return res.status(200).json(admins);
  }
  
  async create(req, res) {
    const { nome, email, login, senha } = req.body;

    const emailExists = await Administrator.findOne({ where: { email }});

    if(emailExists) {
      return res.status(400).json({
        success: false,
        message: "Email já utilizado."
      });
    }

    const loginExists = await Administrator.findOne({ where: { login }});

    if(loginExists) {
      return res.status(400).json({
        success: false,
        message: "Login já utilizado."
      });
    }
    
    const encryptedPass = bcrypt.hashSync(senha, 8);

    const admin = await Administrator.create({
      nome,
      email,
      login,
      senha: encryptedPass,
    });
  
    return res.status(200).json(admin);
  }

  async findOne(req, res) {
    const admin = await Administrator.findByPk(req.params.id);
  
    if(!admin) {
      return res.status(400).json({
        success: false,
        message: "Adminstrador não encontrado."
      });
    }

    return res.status(200).json(admin);
  }

  async update(req, res) {
    const { nome, email, login, senha } = req.body;
    
    const admin = await Administrator.findByPk(req.params.id);

    if(!admin) {
      return res.status(400).json({
        success: false,
        message: "Adminstrador não encontrado."
      });
    }
  
    await admin.update({
      nome,
      email,
      login,
      senha,
    });
  
    return res.status(200).json(admin);
  }

  async delete(req, res) {
    const admin = await Administrator.findByPk(req.params.id);
    
    if(!admin) {
      return res.status(400).json({
        success: false,
        message: "Adminstrador não encontrado."
      });
    }

    await admin.destroy();
  
    return res.status(200).json();
  }
}

export default new AdminController;