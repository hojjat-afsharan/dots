import { useState } from 'react'
import './App.css';

type Point = {
  x: number
  y: number
}

function App() {

  const [points, setPoints] = useState<Point[]>([]);
  const [undoPoints, setUndoPoints] = useState<Point[]>([]);
  

  function handleMouseClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    setPoints([...points, {x: event.clientX, y: event.clientY}]);
  }

  function handleUndo(): void {
    let newPoints = [...points];
    let undoPoint = newPoints.pop();
    if(!undoPoint) return;
    setUndoPoints([...undoPoints, undoPoint]);
    setPoints(newPoints);
  }

  function handleRedo(): void {
    let undo = [...undoPoints];
    let lastUndoPoint = undo.pop();
    setUndoPoints([...undo]);
    if(!lastUndoPoint) return;
    setPoints([...points, lastUndoPoint]);
  }

  return (
    <div className="App">
        <button className='undo' onClick={handleUndo}>Undo</button>
        <button className='redo' onClick={handleRedo}>Redo</button>
      <div className="container" onClick={handleMouseClick}>
    
        {points.map((point, index) => {
          return <div key={index} className="point" style={{left: point.x - 6 +'px', top: point.y - 6 + 'px'}}></div>
        })}
      </div>
    </div>
  )
}

export default App
