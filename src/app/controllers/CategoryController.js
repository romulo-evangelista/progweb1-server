import { Category } from '../models/index';

class CategoryController {
  async list(req, res) {
    const categories = await Category.findAll();

    if(!categories) {
      return res.status(400).json({
        success: false,
        message: "Não há categorias cadastradas."
      });
    }
  
    return res.status(200).json(categories);
  }
  
  async create(req, res) {
    const { descricao } = req.body;

    const category = await Category.create({
      descricao
    });
  
    return res.status(200).json(category);
  }

  async findOne(req, res) {
    const category = await Category.findByPk(req.params.id);
  
    if(!category) {
      return res.status(400).json({
        success: false,
        message: "Categoria não encontrada."
      });
    }

    return res.status(200).json(category);
  }

  async update(req, res) {
    const { descricao } = req.body;

    console.log(descricao);

    const category = await Category.findByPk(req.params.id);
    
    if(!category) {
      return res.status(400).json({
        success: false,
        message: "Categoria não encontrada."
      });
    }

    await category.update({
      descricao
    });
  
    return res.status(200).json(category);
  }

  async delete(req, res) {
    const category = await Category.findByPk(req.params.id);
    
    if(!category) {
      return res.status(400).json({
        success: false,
        message: "Categoria não encontrada."
      });
    }

    await category.destroy();
  
    return res.status(200).json();
  }
}

export default new CategoryController;