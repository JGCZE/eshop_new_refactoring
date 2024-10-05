"use client";
import clsx from "clsx";
import React, { ReactElement, useState } from "react";

interface IProps {
  handleChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
      className={clsx("border-2 border-black rounded-lg", {
        "bg-yellow-300": isActive?.includes(title),
        "bg-white": !isActive?.includes(title),
      })}
    >
      <button className="w-32 h-20 px-4" onClick={handleChange}>
        {title}
      </button>
    </div>
  );
};

export default FilterButton;
