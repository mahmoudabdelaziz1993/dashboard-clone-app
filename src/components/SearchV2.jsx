import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClear } from 'react-icons/ai'
import { useForm } from "react-hook-form";

const SearchV2 = ({ Query, setQuery }) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => setQuery(data.id);
    const clear = () => { setQuery(""); reset(); }
    return (
        <form className="inline-flex gap-2" onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Type Here an Id here"
                className="w-full max-w-xs h-7 input"
                {...register("id", { required: true })}
            />
            <button type='submit' className="btn-square btn btn-secondary btn-sm">
                <BiSearchAlt />
            </button>
            {Query.length > 0 && <button onClick={clear} className="btn-square btn btn-error btn-sm">
                <AiOutlineClear />
            </button>}
        </form>
    )
}

export default SearchV2