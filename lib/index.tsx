import { IItemData } from "@/types/customTypes";
import resolveCategory from "./resolvers/resolveCategory";

interface IReturn {
  products: Array<IItemData>;
  categories: Array<string>;
}

export const getCategories = async (): Promise<Array<string> | undefined> => {
  try {
    const URL = "https://fakestoreapi.com/products/categories";
    if (!URL) {
      throw new Error("API URL is not defined");
    }

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const categories = await response.json();
    //const categories = resolveCategory(products);

    return categories;
  } catch (error) {
    console.error(error);
  }
};

export const getProducts = async (fetchParams: {
  category?: string;
}): Promise<IReturn | undefined> => {
  try {
    const selectedCategory = fetchParams.category;

    const URL = "https://fakestoreapi.com/products";
    if (!URL) {
      throw new Error("API URL is not defined");
    }

    const params = selectedCategory
      ? `${URL}/category/${selectedCategory}`
      : URL;

    console.log(params);
    const response = await fetch(params);

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
