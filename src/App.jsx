import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FullscreenVideo from "./components/FullScreenVideo";
import Search from './components/Search';
import Menu from './components/Menu';
import { videos } from '../firebase/data';

function App() {
  const [inputValue, setInputValue] = useState(''); // Estado para el valor del input
  const [filter, setFilter] = useState(''); // Estado para el filtro de búsqueda
  const [selectedUnit, setSelectedUnit] = useState(''); // Estado para la unidad seleccionada

  // Filtrar los videos basado en el estado del filtro y la unidad seleccionada
  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(filter.toLowerCase()) &&
    video.description.toLowerCase().includes(selectedUnit.toLowerCase())
  );

  // Función que se llama cuando se presiona el botón de búsqueda
  const handleSearch = () => {
    setFilter(inputValue);
  };

  return (
    <div className='absolute flex left-0 top-0 w-full h-screen flex-col bg-black bg-opacity-35'>
      <Menu setSelectedUnit={setSelectedUnit} />
      <Search
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearch={handleSearch}
      />
      <FullscreenVideo data={filteredVideos} />
    </div>
  )
}

export default App
