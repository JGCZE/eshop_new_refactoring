import { IItemData } from "@/types/customTypes";
import React from "react";
import FilterButton from "./ui/FilterButton";

const Filters = ({ categories }: { categories: Array<string> }) => {
  return (
    <div className="my-8">
      <div className="flex justify-between">
        {categories.map((oneCat) => (
          <div className="">
            <FilterButton title={oneCat} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
