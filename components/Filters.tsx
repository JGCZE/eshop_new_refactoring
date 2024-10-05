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

  useEffect(() => {
    const searchParams = new URLSearchParams();

    searchParams.set("category", selectedCategories.join(","));
    const newPathname = `?${searchParams.toString()}`;
    router.push(newPathname);
  }, [selectedCategories]);

  const handleChange = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const category = e.currentTarget.textContent;

      if (!category) return;

      const checkIfExist = selectedCategories.find((cat) => cat === category);
      if (checkIfExist) {
        const removeExisting = selectedCategories.filter(
          (allCat) => allCat !== checkIfExist
        );
        setSelectedCategories(removeExisting);
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    },
    [selectedCategories]
  );

  return (
    <div className="my-8 flex justify-between">
      <div className="flex justify-between items-start w-1/2">
        {categories?.map((category, index) => (
          <div className="" key={index}>
            <FilterButton
              title={category}
              handleChange={handleChange}
              isActive={selectedCategories}
            />
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
