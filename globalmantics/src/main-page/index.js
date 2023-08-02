import Header from "./Header/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './main-page.css'
import { useEffect, useMemo, useState } from "react";
import Featured from "./featured-house";

function App() {
  //useState hook
  const [allHouses, setAllHouses] = useState([])
  //load data
  useEffect(() => {
    const fetchHouses = async()=>{ 
    const res= await  fetch('/houses.json')
    const houses = await res.json()
    setAllHouses(houses)
    }
    fetchHouses()
  }, [])

  //useMemo
  const featuredHouse = useMemo(() => {
  if (allHouses.length) {
    const randomIndex = Math.floor(Math.random() * allHouses.length)
    return allHouses[randomIndex]
  }
  },[allHouses])
  
  return (
    <Router>
      <div className='container'>
        <Header subtitle="Providing houses all over the world"/>
        <Routes>
          <Route path="/" element={<Featured house={featuredHouse}/>} >
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
