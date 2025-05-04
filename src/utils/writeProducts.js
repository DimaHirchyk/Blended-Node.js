import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProducts = async (updatedProducts) => {
  try {
    const json = JSON.stringify(updatedProducts, undefined, 2);
    const data = fs.writeFile(PATH_DB, json);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
