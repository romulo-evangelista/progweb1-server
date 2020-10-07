import { Client, Product, Purchase, PurchasesProducts } from '../models';

class PurchaseController {
  async list(req, res) {
    const purchasesProducts = await PurchasesProducts.findAll({
      include: [
        {
          model: Product,
          as: 'product'
        },
        {
          model: Purchase,
          as: 'purchase',
          include: {
            model: Client,
            as: 'client'
          }
        }
      ]
    });

    if (!purchasesProducts) {
      return res.status(400).json({
        success: false,
        message: "Não há compras realizadas."
      });
    }

    return res.status(200).json(purchasesProducts);
  }

  async listByClient(req, res) {
    const client_id = req.params.client_id;

    const purchasesProducts = await PurchasesProducts.findAll({
      include: [
        {
          model: Product,
          as: 'product'
        },
        {
          model: Purchase,
          as: 'purchase',
          where: {
            client_id: client_id
          }
        }
      ]
    });

    if (!purchasesProducts) {
      return res.status(400).json({
        success: false,
        message: "Não há compras realizadas."
      });
    }

    return res.status(200).json(purchasesProducts);
  }
  
  async create(req, res) {
    const { client_id, product_id, quant = 0 } = req.body;

    console.log(req.body);

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