import Product from '../models/Product';

class ProductController {
  async list(req, res) {
    const products = await Product.findAll();

    if(!products) {
      return res.status(400).json({
        success: false,
        message: "Não há produtos cadastrados."
      });
    }
  
    return res.status(200).json(products);
  }
  
  async create(req, res) {
    const { descricao, preco, quantidade } = req.body;

    const product = await Product.create({
      descricao,
      preco,
      quantidade
    });
  
    return res.status(200).json(product);
  }

  async findOne(req, res) {
    const product = await Product.findByPk(req.params.id);
  
    if(!product) {
      return res.status(400).json({
        success: false,
        message: "Produto não encontrado."
      });
    }

    return res.status(200).json(product);
  }

  async update(req, res) {
    const { descricao, preco, quantidade } = req.body;
    
    const product = await Product.findByPk(req.params.id);

    if(!product) {
      return res.status(400).json({
        success: false,
        message: "Produto não encontrado."
      });
    }
  
    await product.update({
      descricao,
      preco,
      quantidade
    });
  
    return res.status(200).json(product);
  }

  async delete(req, res) {
    const product = await Product.findByPk(req.params.id);
    
    if(!product) {
      return res.status(400).json({
        success: false,
        message: "Produto não encontrado."
      });
    }

    await product.destroy();
  
    return res.status(200).json();
  }
}

export default new ProductController;