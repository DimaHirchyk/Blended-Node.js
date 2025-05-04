import { readProducts } from '../utils/readProducts.js';

export const groupProductsByCategories = async () => {
  try {
    const prods = await readProducts();
    return prods.reduce((acc, { category, name }) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(name);

      return acc;
    }, {});
  } catch (error) {
    console.log(error.message);
  }
};

groupProductsByCategories().then(console.log);
