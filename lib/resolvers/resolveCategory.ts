import { IItemData } from "@/types/customTypes";

const resolveCategory = (data: Array<IItemData>) => {
  const uniqueCategories = data.reduce<Array<string>>((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);

  return uniqueCategories;
};

export default resolveCategory;
