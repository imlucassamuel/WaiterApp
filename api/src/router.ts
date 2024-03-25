import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './useCases/categories/listCategory';
import { createCategories } from './useCases/categories/createCategory';
import { listProducts } from './useCases/products/listProducts';
import { createProducts } from './useCases/products/createProduct';
import { listProductsByCategory } from './useCases/categories/listProductsByCategory';
import { listOrders } from './useCases/orders/listOrders';
import { createOrder } from './useCases/orders/createOrder';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { cancelOrder } from './useCases/orders/cancelOrder';
import { deleteProduct } from './useCases/products/deleteProduct';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },

    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

//List categories
router.get('/categories', listCategories);

//Create category
router.post('/categories', createCategories);

//List products
router.get('/products', listProducts);

//Delete products
router.delete('/products/:productId', deleteProduct);

//Create product
router.post('/products', upload.single('image'), createProducts);

//Get Prodcuts by category
router.get('/categories/:categoryId/products', listProductsByCategory);

//List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

//Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);
