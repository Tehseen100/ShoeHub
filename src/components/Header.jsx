import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const Header = ({ searchQuery, setSearchQuery, selectedBrand, setSelectedBrand }) => {

    const brands = ['All', 'Nike', 'FILA', 'Adidas'];

    const searchInput = (e) => {
        console.log(e.target.value);
        setSearchQuery(e.target.value)
    }

    return (
        <div className='w-full h-[180px] flex flex-col items-center justify-center'>

            <div className='w-full flex items-center justify-center mb-5'>
                <div id="searchBar" className='flex items-center justify-center w-full'>
                    <input
                        onChange={searchInput}
                        value={searchQuery}
                        type="text"
                        spellCheck={false}
                        placeholder='search shoes'
                        className='lg:w-[50%] sm:w-[65%] w-[75%] h-[45px] px-5 py-2 rounded-l-3xl focus:outline-none focus:ring-2 focus:ring-green-700 placeholder:text-md placeholder:text-[#0c1720] text-black'
                    />
                    <FaSearch className='text-white bg-emerald-700 w-[50px] h-[45px] px-3 py-2 rounded-r-3xl cursor-pointer hover:bg-emerald-800 transition duration-300' />
                </div>
            </div>

            <div className='flex gap-5'>
                {
                    brands.map((brand, idx) => {
                        return <button
                            key={idx}
                            onClick={() => setSelectedBrand(brand === 'All' ? '' : brand)}
                            className={`bg-emerald-700 text-white px-4 py-1 rounded-md cursor-pointer
                                 hover:bg-emerald-800 transition duration-300 ${selectedBrand === brand ? 'bg-emerald-800' : ''}`}>{brand}
                        </button>
                    })
                }

            </div>

        </div>
    )
}

export default Header