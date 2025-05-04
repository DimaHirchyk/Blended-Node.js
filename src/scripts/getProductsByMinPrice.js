import { readProducts } from '../utils/readProducts.js';

export const getProductsByMinPrice = async (price) => {
  try {
    const prods = await readProducts();

    return prods.filter((prod) => prod.price >= price);
  } catch (error) {
    console.log(error.message);
  }
};

getProductsByMinPrice(600).then((prod) => console.log(prod));
