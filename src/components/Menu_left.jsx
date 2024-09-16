import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_video, get_video } from '../../redux/videoAction';

function Menu_left({ isOpenLeft, toggleMenuLeft }) {
    const [formData, setFormData] = useState({
        url: '',
        title: '',
        description: ''
    });
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const create = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);

        dispatch(add_video(formData));

        setFormData({
            url: '',
            title: '',
            description: ''
        })
        dispatch(get_video())

    };
    return (
        <div
            className={`fixed top-0 left-[-384px] h-full bg-black bg-opacity-60 shadow-lg transform transition-transform w-96 max-sm:w-1/2 p-4 duration-700
            ${isOpenLeft ? 'translate-x-0' : 'translate-x-96'} `}>
            <span className="rounded-full absolute right-1 top-[50%] cursor-pointer text-gray-100 font-semibold material-symbols-outlined"
                onClick={toggleMenuLeft}>
                arrow_left
            </span>

            {/* FORMULARIO */}
            <form className="relative top-7 w-5/6 mx-auto bg-black bg-opacity-55 p-2 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-1">URL</label>
                    <input
                        type="url"
                        id="url"
                        name="url"
                        className="w-full px-3 py-2 bg-slate-700 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://example.com"
                        value={formData.url}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">Título</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full px-3 py-2 bg-slate-700 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Título del enlace"
                        value={formData.title}
                        onChange={handleChange}
                        required />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Descripción</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        className="w-full px-3 py-2 bg-slate-700 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Descripción del enlace"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-slate-600 text-gray-200 font-medium py-2 rounded-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={create}
                >Agregar</button>
            </form>
        </div>
    )
}

export default Menu_left