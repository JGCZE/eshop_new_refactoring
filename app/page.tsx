import Filters from "@/components/Filters";
import { getProducts } from "@/lib";
import ItemCard from "../components/ItemCard";
import { IItemData } from "@/types/customTypes";

export default async function Home({ searchParams }) {
  const allProducts = await getProducts({
    category: searchParams?.category || "",
  });

  if (!allProducts) {
    return <div>Error loading products</div>;
  }

  const { products, categories } = allProducts;

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
