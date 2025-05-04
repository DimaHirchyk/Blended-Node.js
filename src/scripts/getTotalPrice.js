import { readProducts } from '../utils/readProducts.js';

export const getTotalPrice = async () => {
  try {
    const prods = await readProducts();
    const total = prods.reduce((sum, prod) => {
      const price = parseFloat(prod.price);
      return sum + price;
    }, 0);
    console.log(total);
  } catch (error) {
    console.log(error.message);
  }
};

getTotalPrice();
