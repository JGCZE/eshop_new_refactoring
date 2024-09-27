import { IItemData } from "@/types/customTypes";
import resolveCategory from "./resolvers/resolveCategory";

interface IReturn {
  products: Array<IItemData>;
  categories: Array<string>;
}

export const getProducts = async (): Promise<IReturn | undefined> => {
  try {
    const URL = process.env.PRODUCTS_API;

    if (!URL) {
      throw new Error("API URL is not defined");
    }

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const products = await response.json();
    const categories = resolveCategory(products);

    return {
      products,
      categories,
    };
  } catch (error) {
    console.error(error);
  }
};
