import React from 'react'

function Menu_right({ isOpen, toggleMenu, toggleMenuLeft, handleUnitChange }) {
    return (<>
        <span className="relative rounded-full left-40 top-12 cursor-pointer text-gray-300 p-[5px] ml-2 border border-gray-700 material-symbols-outlined"
            onClick={toggleMenu}
        >
            sort
        </span>

        {/* Menú lateral */}
        <div
            className={`fixed top-0 right-0 h-full bg-black bg-opacity-60 shadow-lg transform transition-transform w-64 max-sm:w-1/2 p-4 duration-700
         ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } `}
        >
            <span className="rounded-full absolute left-1 top-[50%] cursor-pointer text-gray-100 font-semibold material-symbols-outlined"
                onClick={toggleMenu}
            >
                arrow_right
            </span>
            <div className='relative top-7 text-slate-200 hover:text-yellow-200 cursor-pointer mb-8 flex justify-start '
                onClick={toggleMenuLeft}
            >
                <span className="text-slate-600 material-symbols-outlined">
                    library_add
                </span>
                <p className='ml-1 pb-7'>
                    Agregar
                </p>
            </div>

            <ul>
                <li className="flex text-start mb-2">
                    <a target="_blank" href="https://drive.google.com/drive/u/1/folders/1cvO-UxEW-C0yhz3cyaA_zFhEISjyGKjM" className="flex text-slate-200 hover:text-yellow-200">
                        <span className="pr-1 text-slate-600 material-symbols-outlined">
                            folder
                        </span>
                        <p>Drive de Algebra</p>
                    </a>
                </li>
            </ul>

            <div className='flex justify-start'>
                <h3 className='pr-2 text-slate-400'>Algebra Unidades:</h3>
                <select onChange={handleUnitChange}>
                    <option value="">Todas</option>
                    <option value="U1">1</option>
                    <option value="U2">2</option>
                    <option value="U3">3</option>
                    <option value="U4">4</option>
                    <option value="U5">5</option>
                    <option value="U6">6</option>
                    <option value="U7">7</option>
                    <option value="U8">8</option>
                    <option value="U9">9</option>
                </select>
            </div>

        </div>
    </>)
}

export default Menu_right