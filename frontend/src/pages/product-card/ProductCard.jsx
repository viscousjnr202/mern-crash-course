import React from "react";
import "./ProductCard.css";
import { toast } from "react-toastify";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductsStore } from "../../store/Products.store";

const ProductCard = ({ product,findProductForInput }) => {
    const {deleteProduct} = useProductsStore()
  const { _id, image, price, name } = product;
  async function deleteFunc(id) {
    const { success, message } = await deleteProduct(id);
    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  }
  return (
    <div className="product-card-container">
      <div className="card-container">
        <img src={image} alt={name} />
        <p>{name}</p> 
        <p>GHS {Number(price).toFixed(2)}</p>
        <div className="edit-icon">
          <button>
            <FaRegEdit onClick={() => findProductForInput(_id)}/>
          </button>
          <button onClick={() => deleteFunc(_id)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
