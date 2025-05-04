import { readProducts } from '../utils/readProducts.js';

export const modifyProducts = async () => {
  try {
    const prods = await readProducts();
    const newProd = prods.map(({ description, ...rest }) => rest);
    return newProd;
  } catch (error) {
    console.log(error.message);
  }
};

modifyProducts().then(console.log);
