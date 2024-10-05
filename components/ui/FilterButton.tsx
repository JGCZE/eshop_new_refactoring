"use client";
import clsx from "clsx";
import React, { ReactElement, useState } from "react";

interface IProps {
  handleChange: any;
  isActive?: Array<string>;
  title: string;
}

const FilterButton = ({
  handleChange,
  isActive,
  title,
}: IProps): ReactElement => {
  return (
    <div
      className={clsx(
        "border-2 border-black rounded-lg",
        isActive?.includes(title) && "bg-yellow-300"
      )}
    >
      <div className="">
        <button className="w-32 h-20 px-4" onClick={(e) => handleChange(e)}>
          {title}
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
