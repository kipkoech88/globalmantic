import Header from "./Header/Header";
import {BrowserRouter as Router, Route, Navigation} from 'react-router-dom'
import './main-page.css'
import { useEffect, useMemo, useState } from "react";

function App() {
  //useState hook
  const [allHouses, setAllHouses] = useState([])
  //load data
  useEffect(() => {
    const fetchHouses = async()=>{ 
    const res= await  fetch('http://localhost:3000/houses')
    const houses = await res.json()
    setAllHouses(houses)
    }
    fetchHouses()
  }, [])

  //useMemo
  useMemo(() => {
    let featuredHouse = {}
  if (allHouses.length) {
    const randomIndex = Math.floor(Math.random() * allHouses.length)
    featuredHouse = allHouses[randomIndex]
  }
  },[allHouses])
  
  return (
    <div className='container'>
     <Header subtitle="Providing houses all over the world"/>
    </div>
  );
}

export default App;
