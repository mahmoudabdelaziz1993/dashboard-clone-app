import React from "react";
import { FaSlackHash } from "react-icons/fa";
export const Nav = () => {
  return (
    <div className="flex gap-8 md:flex-col ">
      <div className="flex items-center gap-2">
        <FaSlackHash className="text-4xl" />
        <h3 className="text-lg font-bold uppercase">Logo</h3>
      </div>
      <ul className="w-56 p-2 menu md:menu-vertical menu-horizontal bg-base-100 rounded-box">
        <li className="bordered">
          <a href="!#">
            <FaSlackHash />
            <span className="hidden md:flex"> Item 1</span>
          </a>
        </li>
        <li>
          <a href="!#">
            <FaSlackHash />
            <span className="hidden md:flex"> Item 2</span>
          </a>
        </li>
        <li tabIndex={0}>
          <span>
            {" "}
            <FaSlackHash />
            <span className="hidden md:flex"> Item 3</span>
          </span>
          <ul className="bg-base-300">
            <li>
              <a href="!#">
                {" "}
                <FaSlackHash />
                Submenu 1
              </a>
            </li>
            <li>
              <a href="!#">
                {" "}
                <FaSlackHash />
                Submenu 2
              </a>
            </li>
            <li>
              <a href="!#">
                {" "}
                <FaSlackHash />
                Submenu 3
              </a>
            </li>
          </ul>
        </li>
      </ul>{" "}
    </div>
  );
};
