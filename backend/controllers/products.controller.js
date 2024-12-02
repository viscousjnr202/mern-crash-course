import Product from '../models/product.model.js'
import mongoose from 'mongoose'

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in fetching products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}; //Get all products
export const addProducts = async (req, res) => {
  const product = req.body; //user will pass this data

  // validate the data being passed
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: " Please fil all the fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(`Error in creating product: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}; //add products

export const deleteProducts = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
          .status(404)
          .json({ success: false, message: "Invalid Product Id" });
      } //validating id
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
}; //delete products

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Product Id" });
    } //validating id
    const updatedProducts = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};