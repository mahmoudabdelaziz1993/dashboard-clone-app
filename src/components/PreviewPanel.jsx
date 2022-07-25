import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import Avatar from "./Avatar";
import Search from "./Search.jsx";
import { FaFilter } from "react-icons/fa";
import SearchV2 from "./SearchV2";
import ItemPreview from "./ItemPreview";
const PreviewPanel = () => {
  return (
    <div className="w-full h-full px-1 pt-3 md:px-6 rounded-t-xl artboard bg-base-300">
      <div className="flex items-center justify-between">
        <RiMenu3Line />
        <Search />
        <Avatar />
      </div>
      <div className="flex w-full h-[90%] gap-3 p-3">
        <div className="flex flex-col p-2 rounded-lg">
          <div className="flex justify-between w-full">
            <select
              defaultValue={1}
              className="w-full max-w-[100px] select select-ghost"
            >
              <option value={1}>New</option>
              <option value={2}>Last Week</option>
              <option value={3}>Last Month</option>
            </select>
            <div className="dropdown">
              <label tabIndex={0} className="gap-2 m-1 btn btn-ghost">
                <FaFilter /> Filter
              </label>
              <ul
                tabIndex={0}
                className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="!#">Item 1</a>
                </li>
                <li>
                  <a href="!#">Item 2</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col flex-grow gap-2 overflow-y-auto">
            {new Array(25).fill({ name: null }).map((item, i) => (
              <div key={i} className="rounded-md bg-base-100 hover:bg-base-200">
                {i}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-grow p-2 rounded-lg">
          <div className="flex flex-row-reverse">
            <SearchV2 />
          </div>
          <ItemPreview />
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;
