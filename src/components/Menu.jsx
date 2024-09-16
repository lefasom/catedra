import React, { useState } from 'react';
import Menu_left from './Menu_left';
import Menu_right from './Menu_right';

function Menu({ setSelectedUnit }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenLeft, setIsOpenLeft] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenuLeft = () => {
        setIsOpenLeft(!isOpenLeft);
    };

    const handleUnitChange = (event) => {
        setSelectedUnit(event.target.value);
    };

    return (
        <div>
            {/* Botón para abrir el menú */}
            <Menu_right isOpen={isOpen} toggleMenu={toggleMenu} toggleMenuLeft={toggleMenuLeft} handleUnitChange={handleUnitChange}/>

            {/* Menú izquierdo para agregar elementos */}

            <Menu_left toggleMenuLeft={toggleMenuLeft} isOpenLeft={isOpenLeft} />
        </div>
    );
};

export default Menu;
