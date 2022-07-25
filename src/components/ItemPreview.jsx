import React from 'react'
import { BsFillEyeFill } from "react-icons/bs";
import { AiOutlineClose } from 'react-icons/ai'
import { MdReplay } from 'react-icons/md'
import { FaCheck } from "react-icons/fa";


const ItemPreview = ({ data }) => {
    return (
        <div className="flex flex-col flex-grow m-2 rounded-md bg-base-100">
            <div className="flex flex-wrap justify-between w-full px-6 py-3">
                <div className="flex flex-col ">
                    <h3 className="min-w-[200px] text-2xl font-semibold ">
                        {data?.title}
                    </h3>
                    <div className="inline-flex gap-2"></div>
                    <p className="text-base-content">
                        orderId : <strong className="text-yellow-600">{data?.id}</strong> {"   "}
                        {data?.createdAt}
                    </p>
                </div>

                <a href="!#" className="gap-2 btn btn-link">
                    <BsFillEyeFill /> View All
                </a>
            </div>
            <div className="divider"></div>
            <div className="flex-grow">
                <p className="w-full p-3 text-2xl font-semibold">
                    {data?.description}                </p>
            </div>
            <div className="divider"></div>
            <div className="flex flex-wrap justify-center gap-3 p-3">
                <button className="gap-2 btn btn-outline btn-error "><AiOutlineClose />Reject</button>
                <button className="gap-2 btn btn-primary"><MdReplay />Resubmit</button>
                <button className="gap-2 btn btn-accent"> <FaCheck />accept</button>
            </div>


        </div>
    )
}

export default ItemPreview