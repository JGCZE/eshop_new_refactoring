import { FetchedData, IItemData } from "@/types/customTypes";
import Image from "next/image";
import React, { ReactElement } from "react";

const ItemCard = ({ item }: { item: IItemData }): ReactElement => {
  const { category, description, title, image, rating, price } = item;

  return (
    <div className="w-[340px] border-2 border-blue-400 mb-8 p-4">
      <div className="min-h-[400px]">
        <div className="font-bold h-12">
          {title.length < 60 ? title : title.substring(0, 60) + " ..."}
        </div>
        <div className="w-40 mx-auto my-4 h-32">
          <Image src={image} width={80} height={40} alt="" />
        </div>
        <div className="max-h-40 overflow-auto">{description}</div>
      </div>

      <div className="flex justify-between border-2 border-red-300">
        <div className="font-bold">$ {price}</div>
        <div className="">{category}</div>
        <div className="">{rating.rate}</div>
      </div>
    </div>
  );
};

export default ItemCard;
