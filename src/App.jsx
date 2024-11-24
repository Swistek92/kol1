import "./styles.css";
import UniqueNumbers from "./zadania/UniqueNumbers";
import MedianCalculator from "./zadania/MedianCalculator";
import SymbolNewtona from "./zadania/SymbolNewtona";
import SelectionSort from "./zadania/SelectionSort";
import AverageAboveDiagonal from "./zadania/AverageAboveDiagonal";

export default function App() {
  return (
    <div className="App">
      <UniqueNumbers />
      <hr />
      <MedianCalculator />
      <hr />
      <SymbolNewtona />
      <hr />
      <SelectionSort />
      <hr />

      <AverageAboveDiagonal />
    </div>
  );
}
