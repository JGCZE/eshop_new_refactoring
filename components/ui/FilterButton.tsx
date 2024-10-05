"use client";
import clsx from "clsx";
import React, { ReactElement } from "react";

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
      className={clsx("border-2 border-black rounded-lg mr-2", {
        "bg-green-400 font-semibold": isActive?.includes(title),
        "bg-white": !isActive?.includes(title),
      })}
    >
      <button className="w-26 h-16 px-6" onClick={handleChange}>
        {title}
      </button>
    </div>
  );
};

export default FilterButton;
