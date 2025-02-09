import React from 'react'
import Cart from './components/Cart'
import ProfileCart from './components/ProfileCart'
import { useState, useEffect } from 'react';
import datas from '../data.json'


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);
  return (
    <>
      <ProfileCart />
    </>
  )
}

export default App
