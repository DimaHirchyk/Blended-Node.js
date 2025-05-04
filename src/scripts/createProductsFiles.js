import { access, constants } from 'node:fs';
import { PATH_FILES_DIR } from '../constants/products.js';
import { readProducts } from '../utils/readProducts.js';
import fs from 'node:fs/promises';
import path from 'node:path';

export const createProductsFiles = async () => {
  try {
    const prods = await readProducts();

    await fs.mkdir(PATH_FILES_DIR, { recursive: true });

    for (const prod of prods) {
      const fileName = prod.name.toLowerCase().replace(/\s+/g, '-') + '.json';

      const filePath = path.join(PATH_FILES_DIR, fileName);
      try {
        await access(filePath, constants.F_OK);
        console.log(`Файл "${fileName}" вже існує`);
      } catch (error) {
        await fs.writeFile(
          filePath,
          JSON.stringify(prod, undefined, 2),
          'utf-8',
        );
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

createProductsFiles();
