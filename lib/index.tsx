import { IItemData } from "@/types/customTypes";
import resolveCategory from "./resolvers/resolveCategory";

interface IReturn {
  products: Array<IItemData>;
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

    const data = await response.json();
    const categories = resolveCategory(data);

    return categories;
  } catch (error) {
    console.error(error);
  }
};

export const getProducts = async (fetchParams: {
  category?: string;
}): Promise<IReturn | undefined> => {
  try {
    const URL = "https://fakestoreapi.com/products";
    const selectedCategory = fetchParams.category;
    const arrayOfCategory = selectedCategory
      ? selectedCategory.split(",").filter(Boolean)
      : [];

    if (!URL) {
      throw new Error("API URL is not defined");
    }

    let products = [];

    if (arrayOfCategory.length > 0) {
      const fetchPromises = arrayOfCategory.map((category) => {
        const params = `${URL}/category/${category.trim()}`;
        return fetch(params).then(async (response) => {
          if (!response.ok) {
            throw new Error(`API request failed for category ${category}`);
          }
          return response.json();
        });
      });

      const productsArrays = await Promise.all(fetchPromises);
      products = productsArrays.flat();
    } else {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("API request failed");
      }

      products = await response.json();
    }

    return {
      products,
    };
  } catch (error) {
    console.error(error);
  }
};
