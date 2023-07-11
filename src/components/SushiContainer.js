import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


function SushiContainer({ sushis, handleEatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0);

  const allSushi = sushis
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushi) =>  (
    <Sushi key={sushi.id} sushi={sushi} handleEatSushi={handleEatSushi} /> 
  ));

  const handleClick = () => {
    setSushiIndex((sushiIndex) => (sushiIndex + 4))
  };

  return (
    <div className="belt">
      {allSushi}
      <MoreButton handleClick={handleClick}/>
    </div>
  );
}

export default SushiContainer;