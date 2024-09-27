import { FetchedData, IItemData } from "@/types/customTypes";
import Image from "next/image";
import React, { ReactElement } from "react";

const ItemCard = ({ item }: { item: IItemData }): ReactElement => {
  const { category, description, title, image, rating, price } = item;

  return (
    <div className="w-[340px] border-2 border-blue-400">
      <div>
        <div className="">{title}</div>
        <Image src={image} width={50} height={50} alt="" />
        <div className="">{description}</div>
      </div>

      <div className="flex border-2 border-red-300">
        <div className="">{price}</div>
        <div className="">{category}</div>
        <div className="">{rating.rate}</div>
      </div>
    </div>
  );
};

export default ItemCard;
