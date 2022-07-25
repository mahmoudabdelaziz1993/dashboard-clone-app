import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  return (
    <div className="flex items-center h-full gap-2 p-3 rounded-lg bg-base-200 ">
      <BiSearchAlt />
      <input
        type="text"
        placeholder="Type Here"
        className="w-full max-w-xs h-7 input input-ghost"
      />
    </div>
  );
};

export default Search;
