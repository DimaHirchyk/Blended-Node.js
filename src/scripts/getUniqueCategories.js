import { readProducts } from '../utils/readProducts.js';

export const getUniqueCategories = async () => {
  try {
    const prods = await readProducts();
    const categories = prods.reduce((acc, { category }) => {
      if (category && !acc.includes(category)) {
        acc.push(category);
      }
      return acc;
    }, []);
    return categories;
  } catch (error) {
    console.log(error.message);
  }
};

getUniqueCategories().then(console.log);
