"use client";
import React, { useCallback, useEffect, useState } from "react";
import FilterButton from "./ui/FilterButton";
import { useRouter } from "next/navigation";
interface IProps {
  categories: Array<string>;
}

const Filters = ({ categories }: IProps) => {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<Array<string>>(
    []
  );
  console.log(selectedCategories);

  /* useEffect(() => {
    if (selectedCategories.length > 1) {
      console.log("USE EFFECT");
      searchParams.set("category", selectedCategories);
      const newPathname = `?${searchParams.toString()}`;
      router.push(newPathname);
      } 
      }, [selectedCategories]);
    */

  const handleChange = (e: { target: { innerText: string } }) => {
    const category = e.target.innerText;
    const searchParams = new URLSearchParams();
    setSelectedCategories([...selectedCategories, category]);

    searchParams.set("category", category);
    const newPathname = `?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <div className="my-8 flex justify-between">
      <div className="flex justify-between items-start w-1/2">
        {categories?.map((category) => (
          <div className="">
            <FilterButton title={category} handleChange={handleChange} />
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
