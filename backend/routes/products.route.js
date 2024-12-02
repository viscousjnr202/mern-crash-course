import express from "express";
import { addProducts, deleteProducts, getAllProducts, updateProducts } from "../controllers/products.controller.js";

const productRoute = express.Router();

productRoute.get('/', getAllProducts)
productRoute.post("/", addProducts)
productRoute.put('/:id', updateProducts)
productRoute.delete('/:id',deleteProducts)

export default productRoute