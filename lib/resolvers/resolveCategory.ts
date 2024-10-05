import { IItemData } from "@/types/customTypes";

const resolveCategory = (data: Array<string>) => {
  if (data.length < 1) {
    return undefined;
  }

  const uniqueCategories = data.reduce<Array<string>>((acc, item) => {
    if (typeof item === "string" && !acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  if (!uniqueCategories) return undefined;

  uniqueCategories.push("Reset All");
  return uniqueCategories;
};

export default resolveCategory;
