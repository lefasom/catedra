import { useEffect, useState } from "react";

const Search = ({ inputValue, setInputValue, onSearch }) => {
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <div className="flex p-3 justify-center items-center">
            <div className="
                    flex ">
                <input
                    className="
              bg-black bg-opacity-30
                rounded-l-full
                p-1 
                pl-3 
                pr-3
            border border-gray-700 focus:border-blue-600
            outline-none
            text-slate-100
                "
                    value={inputValue}
                    onChange={handleInputChange}
                    style={{ inp: "none" }}
                    type="text"
                    placeholder="Buscar"
                />

                <span className="
                cursor-pointer
                                    rounded-r-full 
                p-1 
                pl-3 
                pr-3
                border
                border-gray-700
                text-slate-200
                    material-symbols-outlined
                    bg-gray-700
                    "
                    onClick={onSearch}
                >
                    search
                </span>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Search;
