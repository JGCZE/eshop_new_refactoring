"use client";
import React, { ReactElement, useState } from "react";

interface IProps {
  title: string;
  handleChange: any;
}

const FilterButton = ({ title, handleChange }: IProps): ReactElement => {
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
