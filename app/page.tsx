import Filters from "@/components/Filters";
import { getCategories, getProducts } from "@/lib";
import ItemCard from "../components/ItemCard";
import { IItemData } from "@/types/customTypes";

export default async function Home({ searchParams }) {
  const categories = await getCategories();
  const allProducts = await getProducts({
    category: searchParams?.category || "",
  });

  if (!allProducts || !categories) {
    return <div> Error loading products </div>;
  }

  const { products } = allProducts;

  return (
    <div className="container">
      <Filters categories={categories} />

      <div className="w-full justify-between flex flex-wrap">
        {products.map((item: IItemData) => (
          <div className="">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
