import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { useProductsStore } from "../../store/Products.store";
import ProductCard from "../product-card/ProductCard";
import Update from "../../components/update/Update";
import { toast } from "react-toastify";
const HomePage = () => {
  const { products, fetchProducts,  updateProducts} = useProductsStore();
  const [editInput, setEditInput] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [closeEditMenu, setCloseEditMenu] = useState(false);
  const [storeId, useStoreId] = useState(null);

  function handleOnchangeEdit(e) {
    const name = e.target.name;
    const value = e.target.value;
    setEditInput((prev) => ({ ...prev, [name]: value }));
  }
  function findProductForInput(id) {
    const productItem = products.find((product) => product._id === id);
    const { name, price, image } = productItem;
    setEditInput({ name: name, price: price, image: image });
    setCloseEditMenu(true);
    useStoreId(id);
  }

  async function updateProduct(e) {
    e.preventDefault()
    const {success, message}= await updateProducts(storeId, editInput)
    
    if(success){
      toast.success(message)
      setCloseEditMenu(false)
    }
    else{
      toast.error(message)
      setCloseEditMenu(false)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts | []]);

  return (
    <div className="home">
      {closeEditMenu && (
        <Update
          editInput={editInput}
          handleOnchangeEdit={handleOnchangeEdit}
          setCloseEditMenu={setCloseEditMenu}
          updateProduct={updateProduct}
        />
      )}
      <div className="home-main-container">
        <p className="title">Current Products</p>
        {products.length === 0 && (
          <div>
            <p>There is Product To display </p>
            <Link to={"/create"}>
              <button>Create a product</button>
            </Link>
          </div>
        )}
        <div className="home-container">
          {products.map((product) => {
            const { _id } = product;
            return (
              <div className="flex" key={_id}>
                <ProductCard
                  key={_id}
                  product={product}
                  findProductForInput={findProductForInput}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
