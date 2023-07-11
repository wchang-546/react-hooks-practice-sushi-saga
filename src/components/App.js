import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiState, setSushiState] = useState([]);
  const [money, setMoney] = useState(2800);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then((data) => { 
        const allSushi = data.map((sushi) => (
        {...sushi, eaten: false}))

        setSushiState(allSushi)}) 
    }, [])

  const handleEatSushi = (id) => {
    const updatedSushi = sushiState.map((sushi) => {
      if (sushi.id === id && sushi.price <= money && sushi.eaten === false) {
        sushi.eaten = true;
        setMoney((money) => money - sushi.price)
      } 
      return sushi;
    })
    setSushiState(updatedSushi);
  }

  const eatenSushi = sushiState.filter((sushi) => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer sushis={sushiState} handleEatSushi={handleEatSushi}/>
      <Table plates={eatenSushi} money={money}/>
    </div>
  );
}

export default App;