import { readProducts } from '../utils/readProducts.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (number) => {
  try {
    let newProd = [];
    const oldProd = await readProducts();

    for (let i = 1; i < number; i++) {
      newProd.push(createFakeProduct());
    }

    await writeProducts([...oldProd, ...newProd]);
  } catch (error) {
    console.log(error.message);
  }
};

generateProducts(5);
