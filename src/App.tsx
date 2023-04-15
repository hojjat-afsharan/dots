import { useState } from 'react'
import './App.css';

type Point = {
  x: number
  y: number
}

function App() {

  const [points, setPoints] = useState<Point[]>([]);
  

  function handleMouseClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    setPoints([...points, {x: event.clientX, y: event.clientY}]);
  }

  return (
    <div className="App">
      <div className="container" onClick={handleMouseClick}>
        {points.map((point, index) => {
          return <div key={index} className="point" style={{left: point.x, top: point.y}}></div>
        })}
      </div>
    </div>
  )
}

export default App
