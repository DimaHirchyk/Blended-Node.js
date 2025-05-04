import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const readProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error.message);
  }
};
