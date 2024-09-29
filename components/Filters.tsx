import { IItemData } from "@/types/customTypes";
import React, { useState } from "react";
import FilterButton from "./ui/FilterButton";
import { useRouter } from "next/navigation";
import { getCategories } from "@/lib";

const Filters = async () => {
  const categories = await getCategories();

  return (
    <div className="my-8 flex justify-between">
      <div className="flex justify-between items-start w-1/2">
        {categories?.map((category) => (
          <div className="">
            <FilterButton title={category} />
          </div>
        ))}
      </div>

      <div className="w-1/3">
        <div className="">Price filter</div>
        <div className="">Filter by ratings</div>
      </div>
    </div>
  );
};

export default Filters;
