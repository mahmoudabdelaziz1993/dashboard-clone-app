import React from 'react'
import { MdAlarm } from 'react-icons/md'
import { GiIceCube } from 'react-icons/gi'
const ItemFeature = ({ data, setSelectedMessage }) => {
    return (
        <button onClick={() => setSelectedMessage(data)} className=" rounded-md bg-base-100 hover:bg-base-200 min-w-[300px] p-3 cursor-pointer ">
            <div className="flex justify-between">
                <h3 className="text-lg text-base-content max-w-[200px] truncate">From : <span className='text-xl font-bold '>
                    {data?.from}
                </span></h3>
                <MdAlarm />
            </div>
            <p className='text-base '>{data?.createdAt}
            </p>
            <div className="divider"></div>
            <div className="flex items-center gap-3">
                <div className="badge">
                    <GiIceCube />
                </div>
                <div className="">
                    <h3 className="text-sm text-base-content ">OrederID : {data.hash}</h3>
                    <h3 className="text-sm font-bold">Please Confirm New expected time!</h3>
                    <h3 className="text-sm text-base-content">Type</h3>
                    <h3 className="text-sm font-bold">{data.type}</h3>
                </div>
            </div>
        </button>)
}

export default ItemFeature