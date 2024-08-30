import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FullscreenVideo from "./components/FullScreenVideo";
import Search from './components/Search';
import Menu from './components/Menu';
import { videos } from '../firebase/data';
function App() {
  return (
    <div className='absolute flex left-0 top-0 w-full h-screen flex-col bg-black bg-opacity-35'>
      <Menu/>
      <Search />
      <FullscreenVideo data={videos} />
    </div>
  )
}

export default App
