import { Product, PurchasesProducts } from '../models/index';

class PurchaseController {
  async list(req, res) {
    const purchasesProducts = await PurchasesProducts.findAll({
      include: {
        model: Product,
        as: 'product'
      }
    });

    return res.status(200).json(purchasesProducts);
  }
  
  async create(req, res) {
    const { client_id, product_id, quant = 0 } = req.body;

    const purchase = await Purchase.create({
      datetime: new Date(),
      client_id
    });

    const purchaseProduct = await PurchasesProducts.create({
      purchase_id: purchase.id,
      product_id,
      quant
    });
  
    return res.status(200).json(purchaseProduct);
  }
}

export default new PurchaseController;