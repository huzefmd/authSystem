import React from 'react'

function Child2({ bulbOn, setbulbOn }) {
    const toggle = () => {
         setbulbOn(!bulbOn)
        console.log(bulbOn)
    }
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default Child2
