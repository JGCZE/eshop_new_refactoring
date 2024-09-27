"use client";
import React, { ReactElement, useState } from "react";

const FilterButton = ({ title }: { title: string }): ReactElement => {
  const [state, setState] = useState("");
  console.log(state);
  return (
    <div className="border-2 border-red-400">
      <div className="">
        <input
          type="checkbox"
          id={title}
          name={title}
          className="border-2 border-green-400 w-20 h-20"
          onChange={(e) => setState(e.target.id)}
        />
        <label htmlFor={title} className="">
          {title}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;
