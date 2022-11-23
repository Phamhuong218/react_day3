import './App.css';
import { useState } from 'react'

function App() {
  
  const [color, setColor] = useState('red')


  function createHex(){    
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hex = '"#';
    for(let i = 0; i < 6; i++){
    const index = Math.floor(Math.random() * hexValues.length)
    hex += hexValues[index];
    }
    return hex+'"'  
  }

    return (
      <div className="App">
        <div className='colorBox' style={{background: {color}}} onClick={()=>{setColor(createHex)}}></div>
      </div>
    );
}


export default App;
