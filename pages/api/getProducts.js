import axios from "axios"

export const getProducts = async (body) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products", body, {
      headers: { "Content-Type": "application/json" },
    });
    return res;
  } catch (error) {
    return error;
  }
};