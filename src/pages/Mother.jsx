import { useState } from 'react';
import Child1 from './Child1'
import Child2 from './Child2'

function Mother() {
    const [bulbOn, setbulbOn] = useState(true);
  return (
    <div>
          <Child1 bulbOn={ bulbOn}  />
          <Child2 bulbOn={bulbOn} setbulbOn={setbulbOn} />
    </div>
  )
}

export default Mother
