import React, { useState, useEffect } from 'react';
import PlanetDetail from './components/PlanetDetail'
import './App.css';

const App = ()=> {
  const [hasError, setErrors] = useState(false)
  const [planet, setPlanet] = useState({})
  const fetchData = async (num = 4)=> {
    const response = await fetch(`https://swapi.co/api/planets/${num}/`)
      response.json()
      .then(res => setPlanet(res))
      .catch(err => setErrors(err))
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div className="App">
      <PlanetDetail 
      details={planet} 
      />
      <p>full details: {JSON.stringify(planet)}</p>
      <hr />
      <p>Has error: {JSON.stringify(hasError)}</p>
      <button onClick={()=> fetchData(Math.ceil(Math.random() * 10))}>select a random planet</button>
    </div>
  );
}

export default App;
