import { create } from "zustand";

export const useProductsStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.img === "") {
      return { success: false, message: "Please fill in the space" };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product created successfully" };
  },
  fetchProducts: async () => {
    const res = await fetch("/api/products", {
      method: "GET",
    });
    const data = await res.json();
    set({ products: data.data });
  },
  deleteProduct: async (id) => {
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.success) {
      set((state) => ({
        products: state.products.filter((product) => product._id !== id),
      }));
      return { success: data.success, message: data.message };
    } else {
      return { success: data.success, message: data.message };
    }
  },
  updateProducts: async (id, updateProduct) => {
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    });
    const data = await res.json();

    if(data.success) {
      set((state) => ({
        products: state.products.map((product) =>
          product._id === id ? data.data : product
        ),
      }));
      return { success: data.success, message: "Product Edited successfully" };
    }
  else{
    return {success: data.success, message: data.message}
  }
}
}));
