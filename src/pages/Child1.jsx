import React, { useState } from 'react'

function Child1({bulbOn}) {
    
  return (
      <div>
          {bulbOn ? <img src={"public/bulb-on.jpg"} alt="bulb is on " height={500} width={500} /> : <img src={ "public/bulb-off.jpg"} height={500} width={500} />}
    </div>
  )
}

export default Child1
