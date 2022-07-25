import React from "react";

const Avatar = () => {
  return (
    <div className="inline-flex gap-2 ">
      <div className="avatar online ">
        <div className="w-8 rounded-full">
          <img src="https://placeimg.com/192/192/people" alt="!#" />
        </div>
      </div>
      <h3 className="hidden text-sm font-semibold capitalize md:flex">
        Lorm Ipsume
      </h3>
    </div>
  );
};

export default Avatar;
