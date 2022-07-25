import React from 'react'
import { BiSearchAlt } from "react-icons/bi";

const SearchV2 = () => {
    return (
        <div className="inline-flex gap-2">
            <input
                type="text"
                placeholder="Type Here"
                className="w-full max-w-xs h-7 input input-ghost"
            />
            <button className="btn-square btn btn-secondary btn-sm">
                <BiSearchAlt />
            </button>
        </div>
    )
}

export default SearchV2