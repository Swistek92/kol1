import "./styles.css";
import UniqueNumbers from "./zadania/UniqueNumbers";
import MedianCalculator from "./zadania/MedianCalculator";
import SymbolNewtona from "./zadania/SymbolNewtona";
import SelectionSort from "./zadania/SelectionSort";
import AverageAboveDiagonal from "./zadania/AverageAboveDiagonal";

export default function App() {
  return (
    <div className="App">
      {/* <h1>zad1 UniqueNumbers</h1> */}
      <UniqueNumbers />
      <hr />
      {/* <h2>zad2 MedianCalculator</h2> */}
      <MedianCalculator />
      <hr />
      {/* <h1>zad3 SymbolNewtona</h1> */}
      <SymbolNewtona />
      <hr />
{/* ss */}
      <SelectionSort />
      <hr />

      <AverageAboveDiagonal />
    </div>
  );
}
