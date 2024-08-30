import React, { useState } from 'react'

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [isOpenLeft, setIsOpenLeft] = useState(true);

    const toggleMenuLeft = () => {
        setIsOpenLeft(!isOpenLeft);
    };
    return (
        <div>
            {/* Botón para abrir el menú */}
            <span className="relative rounded-full left-40 top-12 cursor-pointer text-gray-300 p-[5px] ml-2 border border-gray-700 material-symbols-outlined"
                onClick={toggleMenu}
            >
                sort
            </span>

            {/* Menú lateral */}
            <div
                className={`fixed top-0 right-0 h-full bg-black bg-opacity-60 shadow-lg transform transition-transform w-64 max-sm:w-1/2  p-4 duration-700
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
                    <span className=" text-slate-600 material-symbols-outlined"

                    >
                        library_add
                    </span>
                    <p className='ml-1  pb-7 '>
                        Agregar
                    </p>

                </div>
                <ul>
                    <li className="flex text-start mb-2">
                        <a target="_blank" href="https://drive.google.com/drive/u/1/folders/1cvO-UxEW-C0yhz3cyaA_zFhEISjyGKjM" className="flex text-slate-200 hover:text-yellow-200">
                            <span class=" pr-1  text-slate-600 material-symbols-outlined">
                                folder
                            </span>
                            <p> Drive de Algebra</p>
                        </a>
                    </li>
                </ul>
                <div className='flex justify-start'>
                    <h3 className='pr-2 text-slate-400'>Algebra Unidades:
                    </h3>

                    <select>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>

                <ul className='text-start pt-2'>
                    <li className="flex text-start mb-2">
                        <a target="_blank" href="https://drive.google.com/drive/u/1/folders/1cvO-UxEW-C0yhz3cyaA_zFhEISjyGKjM" className="flex text-slate-200 hover:text-yellow-200">
                            <span class=" pr-1  text-slate-600 material-symbols-outlined">
                                folder
                            </span>
                            <p> Drive de Fisica</p>
                        </a>
                    </li>
                </ul>
                <div className='flex justify-start'>
                    <h3 className='pr-2  text-slate-400'>Fisica Unidades :
                    </h3>
                    <select>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>

                <ul className='text-start pt-2'>
                    <li className="flex text-start mb-2">
                        <a target="_blank" href="https://drive.google.com/drive/u/1/folders/1cvO-UxEW-C0yhz3cyaA_zFhEISjyGKjM" className="flex text-slate-200 hover:text-yellow-200">
                            <span class=" pr-1  text-slate-600 material-symbols-outlined">
                                folder
                            </span>
                            <p>Drive de AM1</p>
                        </a>
                    </li>
                </ul>
                <div className='flex justify-start'>
                    <h3 className='pr-2  text-slate-400'>AM1 Unidades :
                    </h3>
                    <select>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>




            </div>











            <div
                className={`fixed top-0 left-[-384px] hull bg-black bg-opacity-60 shadow-lg transform transition-transform h-full  w-96 max-sm:w-1/2 p-4 duration-700
                     ${isOpenLeft ? 'translate-x-0' : 'translate-x-96'
                    } `}
            >

                <span className="rounded-full absolute right-1 top-[50%] cursor-pointer text-gray-100 font-semibold material-symbols-outlined"
                    onClick={toggleMenuLeft}
                >
                    arrow_left
                </span>

                {/* FORMULARIO */}
                <form class="relative top-7 w-5/6 mx-auto bg-black bg-opacity-55 p-2 borderrounded-lg shadow-md">
                    <div class="mb-4">
                        <label for="url" class="block text-sm font-medium text-gray-300 mb-1">URL</label>
                        <input type="url" id="url" name="url" class="w-full px-3 py-2 bg-slate-700 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://example.com" required />
                    </div>

                    <div class="mb-4">
                        <label for="title" class="block text-sm font-medium text-gray-300 mb-1">Título</label>
                        <input type="text" id="title" name="title" class="w-full px-3 py-2 bg-slate-700 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Título del enlace" required />
                    </div>

                    <div class="mb-4">
                        <label for="description" class="block text-sm font-medium text-gray-300 mb-1">Descripción</label>
                        <textarea id="description" name="description" rows="4" class="w-full px-3 py-2 bg-slate-700 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Descripción del enlace" required></textarea>
                    </div>

                    <button type="submit" class="w-full bg-slate-600 text-gray-200 font-medium py-2 rounded-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Agregar</button>
                </form>



            </div>
        </div>
    );
};

export default Menu