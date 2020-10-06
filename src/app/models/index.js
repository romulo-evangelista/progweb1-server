import { Category } from './Category';
import { Client } from './Client';
import { Product } from './Product';
import { ProductsCategories } from './ProductsCategories';
import { Purchase } from './Purchase';
import { PurchasesProducts } from './PurchasesProducts';

Client.hasMany(Purchase, {foreignKey: 'client_id'});
Purchase.belongsTo(Client, {foreignKey: 'client_id'});

Product.hasMany(ProductsCategories, {foreignKey: 'product_id'});
Category.hasMany(ProductsCategories, {foreignKey: 'category_id'});
ProductsCategories.belongsTo(Product, {foreignKey: 'product_id'});
ProductsCategories.belongsTo(Category, {foreignKey: 'category_id'});

Purchase.hasMany(PurchasesProducts, {foreignKey: 'purchase_id'});
Product.hasMany(PurchasesProducts, {foreignKey: 'product_id'});
PurchasesProducts.belongsTo(Purchase, {foreignKey: 'purchase_id'});
PurchasesProducts.belongsTo(Product, {foreignKey: 'product_id'});

export {
  Category,
  Client,
  Product,
  ProductsCategories,
  Purchase,
  PurchasesProducts,
}