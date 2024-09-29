"use client";
import { useRouter } from "next/navigation";
import React, { ReactElement, useState } from "react";

const FilterButton = ({ title }: { title: string }): ReactElement => {
  const [activeCategory, setActiveCategory] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    const category = e.target.innerText;
    const searchParams = new URLSearchParams(window.location.search);

    if (activeCategory.length >= 1) {
      setActiveCategory([...activeCategory]);
      console.log(activeCategory);
    }
    searchParams.set("category", title);
    setActiveCategory(title);

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  //console.log(state);

  return (
    <div className="border-2 border-red-400">
      <div className="">
        <button className="w-32 h-20" onClick={(e) => handleChange(e)}>
          {title}
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
