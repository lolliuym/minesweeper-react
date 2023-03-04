import React, {useState} from "react";
import DisplayOfNumber from "../DisplayOfNumber";
import "./App.scss";
import { generateCells } from "../../utils";
import Button from "../Button";

const App: React.FC = () => {
const [cells, setCells] = useState(generateCells());

const renderCells = (): React.ReactNode=> {
  return cells.map((row, rowIndex) => row.map((cell, colIndex) => (
  <Button key={`${rowIndex}-${colIndex}`} state={cell.state} value={cell.value}  row={rowIndex} col={colIndex}/>
  )) )
}

console.log('cells',cells)

  return (
    <div className="App">
      <div className="Header">
      <DisplayOfNumber value={0}/>
      <div className="Face">
        <span role="img" aria-label='face'>=)</span>
      </div>
      <DisplayOfNumber value={22}/>
      </div>
      <div className="Body">{renderCells()}</div>
    </div>
  );
};

export default App;
