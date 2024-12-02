import React, { useState } from "react";
import "./CreatePage.css";
import { useProductsStore } from "../../store/Products.store";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreatePage = () => {
  const [formProducts, setFormProducts] = useState({
    name: "",
    price: "",
    image: "",
  });
  function handleOnchange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormProducts({ ...formProducts, [name]: value });
  }
  //get the global state and methods
  const {createProduct}  = useProductsStore()

  async function handleSubmit(e){
    e.preventDefault()
    const {success, message}= await createProduct(formProducts)
    if(!success){
      toast.error(message)
    }
    else{
      toast.success(message)
      setFormProducts({name: '', image:'', price:''})
    }
  }

  return (
    <div className="create-container">
      <div className="form-container">
        <h1>Create New Products</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formProducts.name}
            onChange={handleOnchange}
          />
          <input
            type="number"
            min="0"
            name="price"
            placeholder="Price"
            value={formProducts.price}
            onChange={handleOnchange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image-URL"
            value={formProducts.image}
            onChange={handleOnchange}
          />
          <button>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
