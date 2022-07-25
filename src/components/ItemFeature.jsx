import React from 'react'
import { MdAlarm } from 'react-icons/md'
import { GiIceCube } from 'react-icons/gi'
const ItemFeature = () => {
    return (
        <div className="rounded-md bg-base-100 hover:bg-base-200 min-w-[300px] p-3 cursor-pointer ">
            <div className="flex justify-between">
                <h3 className="text-lg text-base-content max-w-[200px] truncate">From : <span className='text-xl font-bold '>
                    facilis laborum est ratione possimus?
                </span></h3>
                <MdAlarm />
            </div>
            <p className='text-base '>Mon, 25 Jul 2022 17:33:25 +0000
            </p>
            <div className="divider"></div>
            <div className="flex items-center gap-3">
                <div className="badge">
                    <GiIceCube />
                </div>
                <div className="">
                    <h3 className="text-lg text-base-content ">OrederID - 21372462746</h3>
                    <h3 className="text-lg font-bold">Please Confirm New expected time !</h3>
                    <h3 className="text-lg text-base-content">Type</h3>
                    <h3 className="text-lg font-bold">Job Oreder</h3>
                </div>
            </div>
        </div>)
}

export default ItemFeature