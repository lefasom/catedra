import { useEffect, useState } from 'react'
import FullscreenVideo from "./components/FullScreenVideo";
import Search from './components/Search';
import Menu from './components/Menu';

import { videos } from '../db/data';
import { useDispatch, useSelector } from 'react-redux'
import { get_video } from '../redux/videoAction'

import './App.css'

function App() {

  const [inputValue, setInputValue] = useState(''); // Estado para el valor del input
  const [filter, setFilter] = useState(''); // Estado para el filtro de búsqueda
  const [selectedUnit, setSelectedUnit] = useState(''); // Estado para la unidad seleccionada
  const array = useSelector((state) => state.video.video_array)
  const dispatch = useDispatch()

  const obtenerVideos = () => {
    dispatch(get_video())
  }

  // Filtrar los videos basado en el estado del filtro y la unidad seleccionada
  const filteredVideos = array.filter(video =>
    video.title.toLowerCase().includes(filter.toLowerCase()) &&
    video.description.toLowerCase().includes(selectedUnit.toLowerCase())
  );

  // Función que se llama cuando se presiona el botón de búsqueda
  const handleSearch = () => {
    setFilter(inputValue);
  };


  useEffect(() => {
    obtenerVideos()
  }, [])

  useEffect(() => {
    console.log(array)

  })
   
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
